"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
import cryoteLogo from "../images/Cryote2.png";
import { useEffect, useState } from "react";

const World = dynamic(() => import("../components/ui/globe").then(mod => mod.World), {
  ssr: false,
});

export default function Home() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert("Try something new instead of inspecting 😉");
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);
  const globeConfig = {
    pointSize: 3,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.2,
    emissive: "#220038",
    emissiveIntensity: 0.2,
    shininess: 0.9,
    polygonColor: "rgba(255, 255, 255, 0.7)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    autoRotate: true,
    autoRotateSpeed: 1,
  };

  const data = [
    {
      order: 1,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: "#ff0077",
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.25,
      color: "#00ffff",
    },
  ];

  return (
    <div className="h-screen w-full relative">
      <div className="flex items-center justify-center px-8 py-4">
        <Image
          src={cryoteLogo}
          alt="CryOte Logo"
          width={120}
          height={120}
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <p className="text-5xl text-white px-4 py-2 rounded-md">
          CSI
        </p>
        <p className="text-xl text-white px-4 py-2 rounded-md">
          Computer Society Of India 
        </p>
      </div>

      <World globeConfig={globeConfig} data={data} />

      <div
        className="ml-200 text-5xl text-white cursor-pointer relative"
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
      >
        Want some hints?
        <div
          className={`absolute top-12 left-0 text-5xl text-white bg-black px-3 py-1 rounded-md shadow-lg transition-opacity duration-300 ${
            showHint ? "opacity-100 delay-150" : "opacity-0"
          }`}
        >
          Try inspecting
        </div>
        <div className="h-1">
        </div>
          {/* Cipher -> QFEFCP key -> 11*/}
          {/* Cipher -> ORYBATF key -> 13*/}
          {/* explore this to find more hints https://github.com/Divik707/hint */}
      </div>
    </div>
  );
}
