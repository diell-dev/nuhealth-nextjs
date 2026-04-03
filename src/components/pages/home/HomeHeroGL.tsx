'use client';

import { useEffect } from 'react';

export default function HomeHeroGL() {
  useEffect(() => {
    const canvas = document.getElementById('home-hero-gl') as HTMLCanvasElement | null;
    if (!canvas) return;

    let disposed = false;

    const init = async () => {
      const THREE = await import('three');

      const heroSection = document.getElementById('home-hero');
      if (!heroSection || disposed) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        powerPreference: 'high-performance'
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
          const vec3 forest    = vec3(0.188, 0.271, 0.149);
          const vec3 chocolate = vec3(0.392, 0.224, 0.137);
          const vec3 sage      = vec3(0.561, 0.718, 0.804);
          const vec3 caramel   = vec3(0.671, 0.475, 0.353);
          const vec3 gold      = vec3(0.918, 0.796, 0.565);

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
            float t = uTime * 0.12;
            vec2 mouseOffset = (uMouse - 0.5) * 0.8;
            p += mouseOffset * 0.5;

            // Multi-layer noise for more dynamic movement
            float n1 = snoise(p * 1.4 + vec2(t, t * 0.9));
            float n2 = snoise(p * 2.8 - vec2(t * 0.6, t * 0.4)) * 0.6;
            float n3 = snoise(p * 0.5 + vec2(t * 0.3, -t * 0.5)) * 0.9;
            float n4 = snoise(p * 3.6 + vec2(t * 0.2, t * 0.1)) * 0.4;

            float blend = n1 + n2 + n3 + n4;

            // Enhanced mouse interaction
            float mouseDist = distance(uv, uMouse);
            float mouseGlow = smoothstep(0.8, 0.0, mouseDist) * 0.55;
            float mouseInfluence = smoothstep(0.6, 0.0, mouseDist) * 0.3;

            // Base color mixing with enhanced saturation
            vec3 col = vec3(0.0);

            // Cream and light base
            col = mix(cream, gold, smoothstep(-1.2, 1.0, blend));

            // Rich caramel pools (more dominant)
            float caramelMask = smoothstep(0.15, 0.7, blend) * smoothstep(1.6, 0.6, blend);
            col = mix(col, caramel, caramelMask * 0.75);

            // Chocolate accents (deeper and richer)
            float chocolateMask = smoothstep(0.8, -0.2, blend) * smoothstep(-1.5, -0.5, blend);
            col = mix(col, chocolate, chocolateMask * 0.65);

            // Forest greens (more vibrant)
            float forestMask = smoothstep(-0.5, -1.2, blend) * 0.8;
            col = mix(col, forest, forestMask * 0.4);

            // Sage blues for color richness
            float sageMask = smoothstep(0.2, -0.3, distance(uv, vec2(0.35, 0.6))) * 0.2;
            col = mix(col, sage, sageMask);

            // Gold accents near mouse
            float goldMask = smoothstep(0.3, -0.1, distance(uv, vec2(0.7, 0.3))) * 0.15;
            col = mix(col, gold, goldMask);

            // Mouse interaction glow (warmer)
            col = mix(col, mix(caramel, gold, 0.6), mouseGlow);

            // Subtle vignette (less aggressive for premium feel)
            float vig = smoothstep(0.0, 0.8, distance(uv, vec2(0.5)));
            col = mix(col, col * 0.88, vig * 0.25);

            // Enhanced alpha with more dynamic opacity
            float alpha = 0.55 + blend * 0.12 + mouseGlow * 0.25 + mouseInfluence * 0.1;
            alpha = clamp(alpha, 0.35, 0.8);

            gl_FragColor = vec4(col, alpha);
          }
        `,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(quad);

      // Mouse tracking with higher precision
      let rawMouseX = 0.5, rawMouseY = 0.5;
      const smoothMouse = new THREE.Vector2(0.5, 0.5);
      const MOUSE_EASE = 0.018;

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

  return null;
}
