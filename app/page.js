"use client";
import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import SvgMap from "@/components/map/SvgMap";
import Navbar from "@/components/navbar/Navbar";
import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import ChartComp from "@/components/chart/ChartComp";
import CreateAppointment from "@/components/modal/CreateAppointment";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

export default function Home() {
  sendRequestWithBearerToken("get", "/bookings/2024-01-01", null)
    .then((response) => {
      console.log("GET request successful:", response.data);
    })
    .catch((error) => {
      console.error("Error in GET request:", error);
    });

  const [date, setDate] = useState(new Date());
  console.log(date);

  return (
    <>
      <Navbar />
      <main>
        <div className="flex mx-4 mb-4 p-8 shadow-lg items-center justify-center rounded">
          <SvgMap />
        </div>
        <div className="flex mx-4">
          <DataTableDemo />

          <div>
            <ChartComp />
          </div>
          <div className="flex flex-col select-none">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div>
            <CreateAppointment />
          </div>
        </div>
      </main>
    </>
  );
}
