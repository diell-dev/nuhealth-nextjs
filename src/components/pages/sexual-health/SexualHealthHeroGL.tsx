'use client';

import { useEffect, useRef } from 'react';

export default function SexualHealthHeroGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;

    const init = async () => {
      const THREE = await import('three');

      const heroSection = canvas.parentElement;
      if (!heroSection || disposed) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(heroSection.offsetWidth, heroSection.offsetHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const geo = new THREE.PlaneGeometry(2, 2);
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(heroSection.offsetWidth, heroSection.offsetHeight) }
        },
        vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 1.0); }`,
        fragmentShader: `
          uniform float uTime;
          uniform vec2 uResolution;
          varying vec2 vUv;

          void main() {
            vec2 uv = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
            float dist = length(uv);

            // Concentric rings that pulse outward
            float ring1 = smoothstep(0.02, 0.0, abs(dist - mod(uTime * 0.15, 1.2)));
            float ring2 = smoothstep(0.02, 0.0, abs(dist - mod(uTime * 0.15 + 0.4, 1.2)));
            float ring3 = smoothstep(0.02, 0.0, abs(dist - mod(uTime * 0.15 + 0.8, 1.2)));

            float rings = (ring1 + ring2 + ring3) * 0.3;

            // Soft radial glow
            float glow = exp(-dist * 2.5) * 0.08;

            vec3 sageCol = vec3(0.561, 0.718, 0.804);
            vec3 caramelCol = vec3(0.671, 0.475, 0.353);

            vec3 col = mix(sageCol, caramelCol, dist);
            float alpha = rings + glow;

            gl_FragColor = vec4(col, alpha * 0.7);
          }
        `
      });

      scene.add(new THREE.Mesh(geo, mat));

      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (disposed) return;
        requestAnimationFrame(animate);
        if (startTime === null) startTime = timestamp;
        mat.uniforms.uTime.value = (timestamp - startTime) / 1000;
        renderer.render(scene, camera);
      };
      requestAnimationFrame(animate);

      const handleResize = () => {
        if (disposed || !heroSection) return;
        const w = heroSection.offsetWidth;
        const h = heroSection.offsetHeight;
        renderer.setSize(w, h);
        mat.uniforms.uResolution.value.set(w, h);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        disposed = true;
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        mat.dispose();
        geo.dispose();
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
      id="hero-gl"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
