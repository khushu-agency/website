"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Faithful port of the original `initStats3DCanvas()`. */
export function StatsParticlesScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 15;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.25 });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    function resize() {
      if (!canvas) return;
      const width = canvas.parentElement?.clientWidth ?? canvas.clientWidth;
      const height = canvas.parentElement?.clientHeight ?? canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", resize);
    resize();

    let rafId = 0;
    function animateStats() {
      rafId = requestAnimationFrame(animateStats);
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      renderer.render(scene, camera);
    }
    animateStats();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="stats3dCanvas" />;
}
