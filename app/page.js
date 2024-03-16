"use client";
import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
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
        <div className="flex p-2">
          <div className="w-2/3 p-4 shadow-lg select-none">
            <DataTableDemo />
          </div>

          <div className="w-1/3 p-4 shadow-lg">
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
        </div>
      </main>
    </>
  );
}
