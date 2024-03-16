"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import SvgMap from "@/components/map/SvgMap";

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <SvgMap />
      </div>
    </>
  );
}
