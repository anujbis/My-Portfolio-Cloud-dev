import { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Mesh, Plane, Program, Color } from 'ogl';

export const CloudBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio, 2),
        });

        const gl = renderer.gl;
        containerRef.current.appendChild(gl.canvas);

        const camera = new Camera(gl, { fov: 45 });
        camera.position.z = 5;

        const scene = new Transform();

        const geometry = new Plane(gl, { width: 10, height: 10 });

        const vertex = `
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

        const fragment = `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec3 uColorPrimary;
      uniform vec3 uColorSecondary;

      // Noise functions
      float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
      float noise(vec2 x) {
          vec2 i = floor(x);
          vec2 f = fract(x);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      
      float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
          for (int i = 0; i < 5; ++i) {
              v += a * noise(x);
              x = rot * x * 2.0 + shift;
              a *= 0.5;
          }
          return v;
      }

      void main() {
        vec2 uv = vUv * 2.0 - 1.0;
        float t = uTime * 0.1;
        
        // Abstract flowing neon lines
        float n = fbm(uv * 3.0 + t);
        float n2 = fbm(uv * 5.0 - t * 1.5);
        
        float v = sin(uv.x * 10.0 + n * 5.0) * sin(uv.y * 10.0 + n2 * 5.0);
        v = smoothstep(0.8, 1.0, v);
        
        // Background color: deep dark
        vec3 bg = vec3(0.02, 0.02, 0.04);
        
        // Glow color mix
        vec3 glow = mix(uColorPrimary, uColorSecondary, uv.x * 0.5 + 0.5 + n * 0.5);
        
        vec3 finalColor = bg + glow * v * 1.5;
        
        // Subtle moving dots (stars/data particles)
        float particle = pow(hash(uv * 100.0 + t), 40.0) * 0.5;
        finalColor += uColorPrimary * particle;
        
        // Vignette
        float dist = length(uv);
        finalColor *= smoothstep(1.5, 0.2, dist);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uColorPrimary: { value: new Color('#00e5ff') },    // neon cyan
                uColorSecondary: { value: new Color('#b026ff') },  // neon purple
            },
        });

        const mesh = new Mesh(gl, { geometry, program });
        mesh.setParent(scene);

        const resize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
            // Scale plane to cover screen
            const dist = camera.position.z;
            const height = 2 * Math.tan((camera.fov * Math.PI) / 360) * dist;
            const width = height * camera.aspect;
            mesh.scale.set(width, height, 1);
        };

        window.addEventListener('resize', resize);
        resize();

        let requestAnimationFrameId: number;

        const update = (t: number) => {
            requestAnimationFrameId = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001;
            renderer.render({ scene, camera });
        };

        requestAnimationFrameId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(requestAnimationFrameId);
            if (containerRef.current && gl.canvas) {
                containerRef.current.removeChild(gl.canvas);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 pointer-events-none opacity-100"
            style={{ background: '#050505' }}
        />
    );
};

