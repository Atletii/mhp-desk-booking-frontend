"use client";
import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import SvgMap from "@/components/map/SvgMap";
import Navbar from "@/components/navbar/Navbar";
import ChartComp1 from "@/components/chart/ChartComp1";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import { useBookings } from "@/contexts/BookingContext";
import { useAuth } from "@/contexts/AuthContext";
import { useRooms } from "@/contexts/RoomContext";

export default function Home() {
  const { bookings, refreshBookings, isLoading, date, setDate } = useBookings();
  const { refreshRooms, isLoadingRooms } = useRooms();
  const { currentUser } = useAuth();
  useEffect(() => {
    refreshBookings();
    refreshRooms(date);
  }, [currentUser, date]);

  return (
    <>
      <Navbar />
      <main>
        <div className="flex py-6 w-full">
          <div className="mx-4 mb-4 p-8 shadow-lg items-center justify-center rounded w-full">
            {!isLoadingRooms && <SvgMap date={date} />}
          </div>
          <div className="mx-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </div>
        <div className="flex mx-4 w-full">
          {!isLoading && (
            <DataTableDemo
              data={bookings}
              currentUser={currentUser}
              refreshBooking={refreshBookings}
              refreshRooms={refreshRooms}
              date={date}
            />
          )}
          <div className="select-none">
            {/* Charts */}
            <ChartComp1
              labels={["Monday", "Thuesday", "Wednesday", "Thursday", "Friday"]}
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
