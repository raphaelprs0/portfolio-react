"use client";
import dynamic from "next/dynamic";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

export default function Background() {
  return (
    <div className="background-container">
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  );
}