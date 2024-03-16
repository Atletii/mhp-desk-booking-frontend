"use client";

import Navbar from "@/components/navbar/Navbar";
import SvgMap from "@/components/map/SvgMap";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <SvgMap />
      </div>
    </>
  );
}
