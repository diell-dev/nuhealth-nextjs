'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    __howScrollProgress: number;
  }
}

/* ── Body-profile generation helpers ── */
function generateBodyPoints(profile: number[][], count: number): Float32Array {
  const points: number[] = [];
  const totalWeight = profile.reduce((sum, s) => sum + s[1] + s[2], 0);
  for (let i = 0; i < count; i++) {
    const r = Math.random();
    let cumWeight = 0;
    let section = profile[0];
    let sectionIdx = 0;
    for (let j = 0; j < profile.length; j++) {
      cumWeight += (profile[j][1] + profile[j][2]) / totalWeight;
      if (r <= cumWeight) { section = profile[j]; sectionIdx = j; break; }
    }
    const nextIdx = Math.min(sectionIdx + 1, profile.length - 1);
    const t = Math.random();
    const y  = section[0] + (profile[nextIdx][0] - section[0]) * t;
    const rx = section[1] + (profile[nextIdx][1] - section[1]) * t;
    const rz = section[2] + (profile[nextIdx][2] - section[2]) * t;
    const angle = Math.random() * Math.PI * 2;
    const rad = 0.35 + 0.65 * Math.sqrt(Math.random());
    points.push(Math.cos(angle) * rx * rad, y, Math.sin(angle) * rz * rad);
  }
  return new Float32Array(points);
}

function sortByY(arr: Float32Array, count: number): Float32Array {
  const idx = Array.from({ length: count }, (_, i) => i);
  idx.sort((a, b) => arr[a * 3 + 1] - arr[b * 3 + 1]);
  const sorted = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    sorted[i * 3]     = arr[idx[i] * 3];
    sorted[i * 3 + 1] = arr[idx[i] * 3 + 1];
    sorted[i * 3 + 2] = arr[idx[i] * 3 + 2];
  }
  return sorted;
}

function smoothstep(a: number, b: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* ── Body profiles ── */
const profileAfter = [
  [-2.3, 0.20, 0.16], [-1.9, 0.24, 0.20], [-1.3, 0.32, 0.26],
  [-0.7, 0.38, 0.30], [-0.3, 0.40, 0.32], [ 0.0, 0.42, 0.34],
  [ 0.3, 0.36, 0.28], [ 0.6, 0.34, 0.27], [ 0.8, 0.36, 0.29],
  [ 1.0, 0.42, 0.34], [ 1.3, 0.48, 0.38], [ 1.5, 0.50, 0.40],
  [ 1.7, 0.38, 0.30], [ 1.85, 0.22, 0.18], [ 2.05, 0.30, 0.30],
  [ 2.35, 0.26, 0.26],
];

const profileBefore = [
  [-2.3, 0.26, 0.21], [-1.9, 0.36, 0.30], [-1.3, 0.58, 0.47],
  [-0.7, 0.86, 0.69], [-0.3, 0.98, 0.80], [ 0.0, 1.10, 0.90],
  [ 0.3, 1.01, 0.78], [ 0.6, 0.95, 0.76], [ 0.8, 0.94, 0.76],
  [ 1.0, 0.97, 0.78], [ 1.3, 0.86, 0.68], [ 1.5, 0.75, 0.60],
  [ 1.7, 0.49, 0.39], [ 1.85, 0.27, 0.22], [ 2.05, 0.33, 0.33],
  [ 2.35, 0.28, 0.28],
];

const VERTEX_SHADER = `
  attribute float size;
  attribute vec3 color;
  varying vec3 vColor;
  uniform float uPixelRatio;
  void main() {
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * uPixelRatio * (55.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAGMENT_SHADER = `
  varying vec3 vColor;
  uniform float uOpacity;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = 1.0 - smoothstep(0.0, 0.5, d);
    a = pow(a, 2.0);
    vec3 c = mix(vColor, vec3(1.0), a * 0.15);
    gl_FragColor = vec4(c, a * uOpacity);
  }
`;

export default function WeightLossSilhouetteGL() {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    // Only run on desktop
    if (window.innerWidth < 1024) return;

    let animFrameId: number;

    (async () => {
      const THREE = await import('three');

      const PCOUNT = 10000;
      const BODY_HEIGHT = 4.85;
      const BODY_WIDTH = 2.4;

      interface SilhouetteData {
        renderer: InstanceType<typeof THREE.WebGLRenderer>;
        scene: InstanceType<typeof THREE.Scene>;
        camera: InstanceType<typeof THREE.PerspectiveCamera>;
        geo: InstanceType<typeof THREE.BufferGeometry>;
        mat: InstanceType<typeof THREE.ShaderMaterial>;
        points: InstanceType<typeof THREE.Points>;
        before: Float32Array;
        after: Float32Array;
        rnd: Float32Array;
        mirrorX: boolean;
        cStart: InstanceType<typeof THREE.Color>;
        cEnd: InstanceType<typeof THREE.Color>;
        cAccent: InstanceType<typeof THREE.Color>;
        canvas: HTMLCanvasElement;
      }

      function createSilhouette(canvasId: string, mirrorX: boolean): SilhouetteData | null {
        const cvs = document.getElementById(canvasId) as HTMLCanvasElement | null;
        if (!cvs) return null;

        const renderer = new THREE.WebGLRenderer({ canvas: cvs, alpha: true, antialias: true, powerPreference: 'low-power' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
        camera.position.set(0, 0, 5.0);

        const before = sortByY(generateBodyPoints(profileBefore, PCOUNT), PCOUNT);
        const after  = sortByY(generateBodyPoints(profileAfter, PCOUNT), PCOUNT);

        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(PCOUNT * 3);
        const col = new Float32Array(PCOUNT * 3);
        const szs = new Float32Array(PCOUNT);
        const rnd = new Float32Array(PCOUNT);

        const cStart  = new THREE.Color(0x7a9470);
        const cEnd    = new THREE.Color(0x9abfcc);
        const cAccent = new THREE.Color(0xc4a08a);

        for (let i = 0; i < PCOUNT; i++) {
          const i3 = i * 3;
          pos[i3]     = before[i3] * (mirrorX ? -1 : 1);
          pos[i3 + 1] = before[i3 + 1];
          pos[i3 + 2] = before[i3 + 2];
          col[i3] = cStart.r; col[i3 + 1] = cStart.g; col[i3 + 2] = cStart.b;
          szs[i] = Math.random() * 0.45 + 0.15;
          rnd[i] = Math.random();
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
        geo.setAttribute('size',     new THREE.BufferAttribute(szs, 1));

        const mat = new THREE.ShaderMaterial({
          uniforms: {
            uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            uOpacity:    { value: 0.35 },
          },
          vertexShader: VERTEX_SHADER,
          fragmentShader: FRAGMENT_SHADER,
          transparent: true,
          depthWrite: false,
          blending: THREE.NormalBlending,
        });

        const points = new THREE.Points(geo, mat);
        points.position.y = -0.55;
        scene.add(points);

        return { renderer, scene, camera, geo, mat, points, before, after, rnd, mirrorX, cStart, cEnd, cAccent, canvas: cvs };
      }

      const left  = createSilhouette('silhouette-left', false);
      const right = createSilhouette('silhouette-right', true);
      const silhouettes = [left, right].filter(Boolean) as SilhouetteData[];

      if (!silhouettes.length) return;

      const howSection = document.getElementById('how');
      const tempColor = new THREE.Color();

      const onResize = () => {
        silhouettes.forEach(s => {
          const w = s.canvas.clientWidth;
          const h = s.canvas.clientHeight;
          if (w && h) {
            s.renderer.setSize(w, h, false);
            s.camera.aspect = w / h;
            const fovRad = s.camera.fov * Math.PI / 180;
            const distForHeight = (BODY_HEIGHT / 2) / Math.tan(fovRad / 2);
            const distForWidth = (BODY_WIDTH / 2) / (Math.tan(fovRad / 2) * s.camera.aspect);
            s.camera.position.z = Math.max(distForHeight, distForWidth) + 0.5;
            s.camera.updateProjectionMatrix();
            s.mat.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
          }
        });
      };
      window.addEventListener('resize', onResize);

      let isVisible = false;
      const observer = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting; },
        { threshold: 0.05 }
      );
      if (howSection) observer.observe(howSection);

      let smoothProg = 0;
      let startTime: number | null = null;

      function animate(timestamp: number) {
        animFrameId = requestAnimationFrame(animate);
        if (!isVisible) return;

        if (startTime === null) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;

        const target = typeof window.__howScrollProgress === 'number' ? window.__howScrollProgress : 0;
        smoothProg += (target - smoothProg) * 0.05;
        const morphT = easeInOutCubic(Math.max(0, Math.min(1, smoothProg)));

        silhouettes.forEach(s => {
          const posAttr = s.geo.attributes.position as InstanceType<typeof THREE.BufferAttribute>;
          const colAttr = s.geo.attributes.color as InstanceType<typeof THREE.BufferAttribute>;
          const mx = s.mirrorX ? -1 : 1;

          for (let i = 0; i < PCOUNT; i++) {
            const i3 = i * 3;
            const r = s.rnd[i];

            let x = (s.before[i3]     + (s.after[i3]     - s.before[i3])     * morphT) * mx;
            let y =  s.before[i3 + 1] + (s.after[i3 + 1] - s.before[i3 + 1]) * morphT;
            const z =  s.before[i3 + 2] + (s.after[i3 + 2] - s.before[i3 + 2]) * morphT;

            const freq = 1.0 + r * 0.3;
            const amp  = 0.01 + r * 0.006;
            x += Math.sin(elapsed * freq + r * 20.0) * amp * mx;
            y += Math.cos(elapsed * freq * 0.7 + r * 15.0) * amp;
            const zOffset = Math.sin(elapsed * freq * 0.5 + r * 25.0) * amp * 0.4;

            posAttr.array[i3]     = x;
            posAttr.array[i3 + 1] = y;
            posAttr.array[i3 + 2] = z + zOffset;

            tempColor.copy(s.cStart).lerp(s.cEnd, morphT);
            const dfc = Math.sqrt(x * x + (z + zOffset) * (z + zOffset));
            const ef = smoothstep(0.2, 0.7, dfc);
            const tp = Math.sin(morphT * Math.PI);
            tempColor.lerp(s.cAccent, ef * tp * 0.2);

            colAttr.array[i3]     = tempColor.r;
            colAttr.array[i3 + 1] = tempColor.g;
            colAttr.array[i3 + 2] = tempColor.b;
          }
          posAttr.needsUpdate = true;
          colAttr.needsUpdate = true;

          s.camera.position.x = Math.sin(elapsed * 0.07) * 0.03;
          s.camera.position.y = Math.cos(elapsed * 0.05) * 0.02;
          s.camera.lookAt(0, 0, 0);
          s.points.rotation.y = Math.sin(elapsed * 0.04) * 0.04 + morphT * 0.08;

          s.renderer.render(s.scene, s.camera);
        });
      }

      onResize();
      animFrameId = requestAnimationFrame(animate);
    })();

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return null;
}
