"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement("canvas");
    containerRef.current.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 50;

    // Create particle grid
    const geometry = new THREE.BufferGeometry();
    const count = 800;
    const positionArray = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positionArray[i] = (Math.random() - 0.5) * 200;
      positionArray[i + 1] = (Math.random() - 0.5) * 200;
      positionArray[i + 2] = (Math.random() - 0.5) * 200;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.5,
      color: 0x8fb7cd,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      points.rotation.x += 0.0002;
      points.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      containerRef.current?.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
