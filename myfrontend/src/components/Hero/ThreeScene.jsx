// src/Galaxy.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Galaxy = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create star geometry with positions, colors, and sizes
    const starCount = 20000;
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
      const radius = Math.random() * 1200;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 300;

      positions[i] = radius * Math.cos(angle);
      positions[i + 1] = height;
      positions[i + 2] = radius * Math.sin(angle);

      const color = new THREE.Color();
      color.setHSL(Math.random(), 0.6, Math.random() * 0.3 + 0.1); // Enhance color richness
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;

      sizes[i / 3] = Math.random() * 4 + 1;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create star material with glowing effect and enhanced depth
    const starMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;

        void main() {
          vColor = color;
          vSize = size;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * (350.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;

        void main() {
          float dist = length(gl_PointCoord - 0.5);
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create multiple nebula layers for a parallax effect
    const nebulae = [];
    const nebulaTexture = new THREE.TextureLoader().load('path_to_your_nebula_texture.png');
    for (let i = 0; i < 3; i++) {
      const nebulaMaterial = new THREE.SpriteMaterial({ map: nebulaTexture, blending: THREE.AdditiveBlending });
      const nebula = new THREE.Sprite(nebulaMaterial);
      nebula.scale.set(2000 + i * 500, 1000 + i * 250, 1);
      nebula.position.set(0, 0, -1500 + i * 500);
      scene.add(nebula);
      nebulae.push(nebula);
    }

    // Position camera dynamically
    camera.position.set(0, 200, 1200); 
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars and nebulae
      stars.rotation.y += 0.0007;
      nebulae.forEach((nebula, index) => {
        nebula.rotation.z += 0.0001 * (index + 1);
      });

      // Enhanced twinkling effect
      const sizes = starGeometry.attributes.size.array;
      for (let i = 0; i < sizes.length; i++) {
        sizes[i] += Math.sin(Date.now() * 0.002 + i) * 0.5 + Math.cos(Date.now() * 0.001 + i) * 0.5;
      }
      starGeometry.attributes.size.needsUpdate = true;

      // Parallax effect with nebula layers
      nebulae.forEach((nebula, index) => {
        nebula.position.x = 100 * Math.sin(Date.now() * 0.00005 * (index + 1));
        nebula.position.y = 50 * Math.cos(Date.now() * 0.0001 * (index + 1));
      });

      // Dynamic camera movement
      camera.position.x = 1200 * Math.sin(Date.now() * 0.0001) * Math.cos(Date.now() * 0.0002);
      camera.position.z = 1200 * Math.cos(Date.now() * 0.0001) * Math.sin(Date.now() * 0.0002);
      camera.position.y = 200 * Math.sin(Date.now() * 0.0003);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // Smooth zoom in and out
      camera.fov = 75 + Math.sin(Date.now() * 0.0003) * 7;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Galaxy;
