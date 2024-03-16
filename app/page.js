"use client";
import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import SvgMap from "@/components/map/SvgMap";
import Navbar from "@/components/navbar/Navbar";
import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import ChartComp1 from "@/components/chart/ChartComp1";
import CreateAppointment from "@/components/modal/CreateAppointment";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import { useBookings } from "@/contexts/BookingContext";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { bookings, refreshBookings, isLoading } = useBookings(); // Step 2: Use the useBookings Hook to access bookings

  const [date, setDate] = useState(new Date());

  // sendRequestWithBearerToken("get", "/bookings/2024-01-01", null)
  //   .then((response) => {
  //     console.log("GET request successful:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error in GET request:", error);
  //   });
  const { currentUser } = useAuth();
  useEffect(() => {
    refreshBookings();
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col lg:flex-row py-6 w-full">
          {/* Map Section */}
          <div className="lg:w-2/3 mb-4 p-8 shadow-lg items-center justify-center rounded mx-4">
            <SvgMap />
          </div>

          {/* Calendar Section */}
          <div className="lg:w-1/3 w-full">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border relative flex justify-center"
            />
          </div>
        </div>
        <div className="flex mx-4 w-full">
          {!isLoading && bookings.length > 0 && (
            <DataTableDemo data={bookings} />
          )}
          <div className="select-none">
            {/* Charts */}
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
