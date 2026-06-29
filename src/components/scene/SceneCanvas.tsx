"use client";

import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

type SceneCanvasProps = {
  activeObjectId: string;
  onSelectObject: (id: string) => void;
};

function Desk({ active, onClick }: { active: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-0.6, 0.55, 0]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
        <boxGeometry args={[2.6, 0.32, 1.3]} />
        <meshStandardMaterial color={active || hovered ? "#66d9ef" : "#26415f"} />
      </mesh>
      <mesh castShadow receiveShadow position={[-1.05, -0.85, -0.45]}>
        <boxGeometry args={[0.18, 1.45, 0.18]} />
        <meshStandardMaterial color="#394b67" />
      </mesh>
      <mesh castShadow receiveShadow position={[1.05, -0.85, -0.45]}>
        <boxGeometry args={[0.18, 1.45, 0.18]} />
        <meshStandardMaterial color="#394b67" />
      </mesh>
      <mesh castShadow receiveShadow position={[-1.05, -0.85, 0.45]}>
        <boxGeometry args={[0.18, 1.45, 0.18]} />
        <meshStandardMaterial color="#394b67" />
      </mesh>
      <mesh castShadow receiveShadow position={[1.05, -0.85, 0.45]}>
        <boxGeometry args={[0.18, 1.45, 0.18]} />
        <meshStandardMaterial color="#394b67" />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.3, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.95, 0.7, 0.08]} />
        <meshStandardMaterial color={hovered ? "#9be7f5" : "#0f172a"} />
      </mesh>
      <Html center position={[0, 1.0, 0]}>
        <div className="rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
          Escritorio técnico
        </div>
      </Html>
    </group>
  );
}

function TechnicalBlock({ active, onClick }: { active: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[1.85, 0.38, -0.55]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.95, 0.76, 0.95]} />
        <meshStandardMaterial color={active || hovered ? "#ffd166" : "#5b6b84"} />
      </mesh>
      <Html center position={[0, 0.78, 0]}>
        <div className="rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
          Bloque técnico
        </div>
      </Html>
    </group>
  );
}

export function SceneCanvas({ activeObjectId, onSelectObject }: SceneCanvasProps) {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#050b15] shadow-glow sm:h-[480px]">
      <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/70 backdrop-blur">
        Escena 3D placeholder de Fase 1
      </div>
      <Canvas camera={{ position: [0.2, 2.6, 7.5], fov: 45 }} shadows>
        <color attach="background" args={["#08111e"]} />
        <ambientLight intensity={1.35} />
        <directionalLight position={[5, 8, 4]} intensity={2.4} castShadow />
        <directionalLight position={[-4, 4, -4]} intensity={0.7} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[16, 12]} />
          <meshStandardMaterial color="#0a1323" />
        </mesh>

        <mesh position={[0, 2.4, -3.6]} receiveShadow>
          <planeGeometry args={[16, 6]} />
          <meshStandardMaterial color="#101d32" />
        </mesh>

        <mesh position={[0, 0.1, -1.8]} receiveShadow>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial color="#274060" />
        </mesh>

        <Desk active={activeObjectId === "desk"} onClick={() => onSelectObject("desk")} />
        <TechnicalBlock
          active={activeObjectId === "future-zones"}
          onClick={() => onSelectObject("future-zones")}
        />
      </Canvas>
    </div>
  );
}
