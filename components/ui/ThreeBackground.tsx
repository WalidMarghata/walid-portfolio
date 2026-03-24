"use client";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/lib/hooks";
import * as THREE from "three";

function StaticFallback() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,200,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  );
}

function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = window.innerWidth, H = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.z = 30;

    // Particles
    const pos = new Float32Array(2500 * 3);
    for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 200;
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(starGeo,
      new THREE.PointsMaterial({ color: 0x00c8ff, size: 0.16, transparent: true, opacity: 0.6 }));
    scene.add(stars);

    // Torus knot
    const torus = new THREE.Mesh(
      new THREE.TorusKnotGeometry(6, 1.8, 100, 16),
      new THREE.MeshBasicMaterial({ color: 0x00c8ff, wireframe: true, transparent: true, opacity: 0.055 })
    );
    torus.position.set(14, -2, -10);
    scene.add(torus);

    // Icosahedron
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(4, 1),
      new THREE.MeshBasicMaterial({ color: 0x0044ff, wireframe: true, transparent: true, opacity: 0.05 })
    );
    ico.position.set(-15, 5, -12);
    scene.add(ico);

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    let f = 0, raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      f += 0.004;
      stars.rotation.y = f * 0.14;
      stars.rotation.x = f * 0.045;
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.005;
      ico.rotation.x   += 0.004;
      ico.rotation.z   += 0.003;
      camera.position.x += (mx * 2  - camera.position.x) * 0.025;
      camera.position.y += (-my * 2 - camera.position.y) * 0.025;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
}

export default function ThreeBackground() {
  const mobile = useIsMobile();
  return mobile ? <StaticFallback /> : <ThreeCanvas />;
}
