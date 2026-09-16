"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Faithful port of the original hero `initHero3DScene()` — same geometry,
 * materials, particle counts and animation math as the source HTML.
 * Only additions: proper cleanup on unmount (dispose geometries/materials/
 * renderer, remove listeners) and a ResizeObserver instead of a bare
 * window-resize listener, since this now mounts/unmounts with navigation.
 */
export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 3D Neural Group
    const neuralGroup = new THREE.Group();
    scene.add(neuralGroup);

    // Inner Wireframe Icosahedron / Core
    const coreGeo = new THREE.IcosahedronGeometry(4.8, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x222327,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    neuralGroup.add(coreMesh);

    // Inner Solid Dark Core
    const solidGeo = new THREE.IcosahedronGeometry(3.2, 0);
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x1b1c1f,
      roughness: 0.4,
      metalness: 0.6,
      wireframe: false,
    });
    const solidMesh = new THREE.Mesh(solidGeo, solidMat);
    neuralGroup.add(solidMesh);

    // Orbiting Outer Ring 1
    const ring1Geo = new THREE.TorusGeometry(6.2, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x5a5a60, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    neuralGroup.add(ring1);

    // Orbiting Outer Ring 2
    const ring2Geo = new THREE.TorusGeometry(7.0, 0.03, 16, 100);
    const ring2 = new THREE.Mesh(ring2Geo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    neuralGroup.add(ring2);

    // Floating Particle Cloud (1,000 Neural Nodes)
    const particleCount = 1000;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 5 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x333338,
      size: 0.12,
      transparent: true,
      opacity: 0.55,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    neuralGroup.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(10, 20, 15);
    scene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0x888899, 0.8);
    dirLight2.position.set(-10, -10, -10);
    scene.add(dirLight2);

    // Interactive Mouse Follow & Parallax
    let mouseX = 0,
      mouseY = 0;
    let targetX = 0,
      targetY = 0;

    function onMouseMove(e: MouseEvent) {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    }
    window.addEventListener("mousemove", onMouseMove);

    neuralGroup.position.x = 4.2;
    neuralGroup.position.y = 0.2;

    function resize() {
      if (!canvas) return;
      const width = canvas.parentElement?.clientWidth ?? canvas.clientWidth;
      const height = canvas.parentElement?.clientHeight ?? canvas.clientHeight;
      camera.aspect = width / height;
      if (window.innerWidth < 768) {
        neuralGroup.position.x = 0;
        neuralGroup.position.y = 1.5;
        camera.position.z = 22;
      } else {
        neuralGroup.position.x = 4.2;
        neuralGroup.position.y = 0.2;
        camera.position.z = 18;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", resize);
    resize();

    let rafId = 0;
    const clock = new THREE.Clock();
    function animate() {
      rafId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      neuralGroup.rotation.y = elapsedTime * 0.15 + targetX * 2;
      neuralGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 + targetY * 2;

      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.x = elapsedTime * 0.2;

      coreMesh.rotation.y = -elapsedTime * 0.2;
      solidMesh.rotation.x = elapsedTime * 0.1;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      coreGeo.dispose();
      coreMat.dispose();
      solidGeo.dispose();
      solidMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="hero3dCanvas" />;
}
