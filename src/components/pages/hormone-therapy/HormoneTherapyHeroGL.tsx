'use client';

import { useEffect, useRef } from 'react';

export default function HormoneTherapyHeroGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;

    const init = async () => {
      const THREE = await import('three');

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      camera.position.z = 5;

      const geometry = new THREE.PlaneGeometry(20, 20, 100, 100);
      const positionAttribute = geometry.getAttribute('position');
      const originalPositions = new Float32Array(positionAttribute.array);

      const material = new THREE.MeshPhongMaterial({
        color: 0xAB795A,
        emissive: 0xD8BDA3,
        emissiveIntensity: 0.3,
        wireframe: false,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const light = new THREE.DirectionalLight(0xffffff, 0.5);
      light.position.set(5, 10, 7);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      let time = 0;

      const animate = () => {
        if (disposed) return;
        requestAnimationFrame(animate);
        time += 0.005;

        const posAttr = geometry.getAttribute('position');
        for (let i = 0; i < posAttr.count; i++) {
          const x = originalPositions[i * 3];
          const y = originalPositions[i * 3 + 1];
          const z = Math.sin((x * 0.5 + time) * 0.5) * Math.cos((y * 0.5 + time) * 0.3) * 0.3;
          posAttr.setXYZ(i, x, y, z);
        }
        posAttr.needsUpdate = true;
        geometry.computeVertexNormals();

        mesh.rotation.x += 0.0001;
        mesh.rotation.y += 0.0002;

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (disposed) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        disposed = true;
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        material.dispose();
        geometry.dispose();
      };
    };

    let cleanup: (() => void) | undefined;
    init().then(c => { cleanup = c; });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="heroCanvas"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
