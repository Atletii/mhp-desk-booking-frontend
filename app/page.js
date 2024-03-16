"use client";
import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import SvgMap from "@/components/map/SvgMap";
import Navbar from "@/components/navbar/Navbar";
import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import ChartComp1 from "@/components/chart/ChartComp1";
import CreateAppointment from "@/components/modal/CreateAppointment";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

export default function Home() {
  // sendRequestWithBearerToken("get", "/bookings/2024-01-01", null)
  //   .then((response) => {
  //     console.log("GET request successful:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error in GET request:", error);
  //   });

  const [date, setDate] = useState(new Date());
  console.log(date);

  return (
    <>
      <Navbar />
      <main className="p-3">
        <div className="flex flex-col lg:flex-row py-6">
          {/* Map Section */}
          <div className="lg:w-3/4 mb-4 mx-4 lg:mx-0 lg:mb-0 lg:p-8 lg:shadow-lg lg:items-center lg:justify-center rounded-md border">

            <SvgMap />
          </div>
          {/* Calendar Section */}
          <div className="lg:w-1/4 lg:mx-4 w-full flex justify-center">
            <div className="rounded-md border relative flex justify-center mx-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Data Table and Charts Section */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Data Table */}
          <div className="lg:w-2/3 mb-4 mx-4 lg:mx-0 lg:mb-0">
            <DataTableDemo />
          </div>

          {/* Charts */}
          <div className="select-none lg:w-1/3 px-5 my-3 flex justify-around flex-col shadow-lg rounded-md border ml-3 items-center">
            <ChartComp1
              labels={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
              data={[10, 28, 59, 17, 90]}
              useClient={true}
            />
            <ChartComp1
              labels={["9-11", "11-13", "13-15", "15-17"]}
              data={[33, 60, 10, 5]}
              useClient={true}
            />
          </div>
        </div>
      </main>
    </>
  );
}