"use client";
import React, { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Texture } from "ogl";

interface LiquidChromeImageProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    speed?: number;
    distortionScale?: number;
    metallicMix?: number;
    rippleStrength?: number;  // 👈 new
    rippleFrequency?: number; // 👈 new
    rippleFalloff?: number;   // 👈 new
}


const LiquidChromeImage: React.FC<LiquidChromeImageProps> = ({
    imageUrl,
    speed = 0.6,
    distortionScale = 5,
    metallicMix = 4,
    ...props
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const renderer = new Renderer({ antialias: true });
        const gl = renderer.gl;
        container.appendChild(gl.canvas);

        const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform sampler2D uTexture;
      uniform float uDistortionScale;
      uniform float uMetallicMix;
      uniform vec2 uMouse;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;

        // Metallic distortion
        uv.x += uDistortionScale * sin(uv.y * 10.0 + uTime);
        uv.y += uDistortionScale * cos(uv.x * 10.0 + uTime);

    // Ripple effect from mouse
vec2 diff = uv - uMouse;
float dist = length(diff);

// Ripple wave (circular, no pinch)
float ripple = 0.02 * sin(12.0 * dist - uTime * 4.0);  
uv += diff / dist * ripple * exp(-dist * 4.0);




        vec3 tex = texture2D(uTexture, uv).rgb;

        // Chrome-like metallic shading
        float lighting = abs(sin(uv.x * 10.0 + uTime)) * 0.5 + 0.5;
        vec3 metallic = mix(tex, vec3(lighting), uMetallicMix);

        gl_FragColor = vec4(metallic, 1.0);
      }
    `;

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height]) },
                uTexture: { value: new Texture(gl) },
                uDistortionScale: { value: distortionScale },
                uMetallicMix: { value: metallicMix },
                uMouse: { value: new Float32Array([0.5, 0.5]) }, // center default
            },
        });
        const mesh = new Mesh(gl, { geometry, program });

        // Load image
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imageUrl;
        img.onload = () => {
            (program.uniforms.uTexture.value as Texture).image = img;
        };

        // Resize
        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            const resUniform = program.uniforms.uResolution.value as Float32Array;
            resUniform[0] = gl.canvas.width;
            resUniform[1] = gl.canvas.height;
        }
        window.addEventListener("resize", resize);
        resize();

        // Mouse move
        function handleMouseMove(e: MouseEvent) {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = 1.0 - (e.clientY - rect.top) / rect.height;
            const mouseUniform = program.uniforms.uMouse.value as Float32Array;
            mouseUniform[0] = x;
            mouseUniform[1] = y;
        }
        container.addEventListener("mousemove", handleMouseMove);

        function handleTouchMove(e: TouchEvent) {
            if (e.touches.length > 0) {
                const rect = container.getBoundingClientRect();
                const x = (e.touches[0].clientX - rect.left) / rect.width;
                const y = 1.0 - (e.touches[0].clientY - rect.top) / rect.height;
                const mouseUniform = program.uniforms.uMouse.value as Float32Array;
                mouseUniform[0] = x;
                mouseUniform[1] = y;
            }
        }
        container.addEventListener("touchmove", handleTouchMove);

        // Animation
        let raf: number;
        function animate(t: number) {
            raf = requestAnimationFrame(animate);
            program.uniforms.uTime.value = t * 0.001 * speed;
            renderer.render({ scene: mesh });
        }
        animate(0);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("touchmove", handleTouchMove);
            if (gl.canvas.parentElement) {
                gl.canvas.parentElement.removeChild(gl.canvas);
            }
        };
    }, [imageUrl, speed, distortionScale, metallicMix]);

    return <div ref={containerRef} className="w-full h-full" {...props} />;
};

export default LiquidChromeImage;
