"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Faithful port of the original `initSynapticWave()` — the 45x45 point-grid
 * "wave" visual in the What We Do section, with the same wave math and
 * mouse-x-driven offset as the source HTML.
 */
export function SynapticWaveScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 6, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const rows = 45,
      cols = 45;
    const count = rows * cols;
    const positions = new Float32Array(count * 3);

    let idx = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const u = (i / (rows - 1) - 0.5) * 16;
        const v = (j / (cols - 1) - 0.5) * 16;
        positions[idx * 3] = u;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = v;
        idx++;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const waveMat = new THREE.PointsMaterial({
      color: 0x222326,
      size: 0.14,
      transparent: true,
      opacity: 0.65,
    });
    const waveMesh = new THREE.Points(waveGeo, waveMat);
    scene.add(waveMesh);

    let mouseX = 0;
    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    }
    canvas.addEventListener("mousemove", onMouseMove);

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
    const clock = new THREE.Clock();
    function animateWave() {
      rafId = requestAnimationFrame(animateWave);
      const time = clock.getElapsedTime();
      const posAttr = waveGeo.attributes.position;
      const array = posAttr.array as Float32Array;

      let pIdx = 0;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const u = array[pIdx * 3];
          const v = array[pIdx * 3 + 2];
          const wave1 = Math.sin(u * 0.5 + time * 2.0) * 0.7;
          const wave2 = Math.cos(v * 0.4 + time * 1.5 + mouseX * 2) * 0.6;
          array[pIdx * 3 + 1] = wave1 + wave2;
          pIdx++;
        }
      }
      posAttr.needsUpdate = true;
      waveMesh.rotation.y = time * 0.08;
      renderer.render(scene, camera);
    }
    animateWave();

    return () => {
      cancelAnimationFrame(rafId);
      canvas?.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      waveGeo.dispose();
      waveMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="synapticWaveCanvas" style={{ width: "100%", height: "100%", display: "block" }} />;
}
