'use client';

import { useEffect, useRef } from 'react';

export default function WeightLossHeroGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;

    const init = async () => {
      const THREE = await import('three');

      const heroSection = document.getElementById('hero');
      if (!heroSection || disposed) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        powerPreference: 'low-power'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime:       { value: 0 },
          uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
          uResolution: { value: new THREE.Vector2(1, 1) },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2  uMouse;
          uniform vec2  uResolution;

          const vec3 cream     = vec3(0.878, 0.835, 0.788);
          const vec3 sand      = vec3(0.847, 0.741, 0.639);
          const vec3 caramel   = vec3(0.671, 0.475, 0.353);
          const vec3 chocolate = vec3(0.392, 0.224, 0.137);
          const vec3 forest    = vec3(0.188, 0.271, 0.149);
          const vec3 sky       = vec3(0.561, 0.718, 0.804);

          vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

          float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                               -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v - i + dot(i, C.xx);
            vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                                         + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                                     dot(x12.zw, x12.zw)), 0.0);
            m = m * m;
            m = m * m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
            vec3 g;
            g.x = a0.x * x0.x + h.x * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }

          void main() {
            vec2 uv = vUv;
            float aspect = uResolution.x / uResolution.y;
            vec2 p = vec2(uv.x * aspect, uv.y);
            float t = uTime * 0.08;
            vec2 mouseOffset = (uMouse - 0.5) * 0.6;
            p += mouseOffset * 0.3;
            float n1 = snoise(p * 1.2 + vec2(t, t * 0.7));
            float n2 = snoise(p * 2.4 - vec2(t * 0.5, t * 0.3)) * 0.5;
            float n3 = snoise(p * 0.6 + vec2(t * 0.2, -t * 0.4)) * 0.8;
            float blend = n1 + n2 + n3;
            float mouseDist = distance(uv, uMouse);
            float mouseGlow = smoothstep(0.6, 0.0, mouseDist) * 0.35;
            vec3 col;
            col = mix(cream, sand, smoothstep(-0.8, 0.8, blend));
            float caramelMask = smoothstep(0.2, 0.6, blend) * smoothstep(1.4, 0.8, blend);
            col = mix(col, caramel, caramelMask * 0.55);
            float forestMask = smoothstep(-0.3, -1.0, blend);
            col = mix(col, forest, forestMask * 0.2);
            float skyMask = smoothstep(0.4, 0.0, distance(uv, vec2(0.8, 0.7))) * 0.15;
            col = mix(col, sky, skyMask);
            col = mix(col, caramel, mouseGlow);
            float vig = smoothstep(0.0, 0.7, distance(uv, vec2(0.5)));
            col = mix(col, col * 0.85, vig * 0.3);
            float alpha = 0.45 + blend * 0.08 + mouseGlow * 0.15;
            alpha = clamp(alpha, 0.3, 0.65);
            gl_FragColor = vec4(col, alpha);
          }
        `,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(quad);

      // Mouse tracking
      let rawMouseX = 0.5, rawMouseY = 0.5;
      const smoothMouse = new THREE.Vector2(0.5, 0.5);
      const MOUSE_EASE = 0.025;

      const handleMouseMove = (e: MouseEvent) => {
        rawMouseX = e.clientX / window.innerWidth;
        rawMouseY = 1.0 - (e.clientY / window.innerHeight);
      };
      document.addEventListener('mousemove', handleMouseMove);

      // Resize
      const onResize = () => {
        if (!heroSection || disposed) return;
        const w = heroSection.clientWidth;
        const h = heroSection.clientHeight;
        renderer.setSize(w, h);
        material.uniforms.uResolution.value.set(w, h);
      };
      window.addEventListener('resize', onResize);

      // Visibility observer
      let isVisible = true;
      const observer = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting; },
        { threshold: 0.05 }
      );
      observer.observe(heroSection);

      // Animation loop
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (disposed) return;
        requestAnimationFrame(animate);
        if (!isVisible) return;

        if (startTime === null) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        material.uniforms.uTime.value = elapsed;

        smoothMouse.x += (rawMouseX - smoothMouse.x) * MOUSE_EASE;
        smoothMouse.y += (rawMouseY - smoothMouse.y) * MOUSE_EASE;
        material.uniforms.uMouse.value.copy(smoothMouse);

        renderer.render(scene, camera);
      };
      requestAnimationFrame(animate);
      onResize();

      // Return cleanup
      return () => {
        disposed = true;
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', onResize);
        observer.disconnect();
        renderer.dispose();
        material.dispose();
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
