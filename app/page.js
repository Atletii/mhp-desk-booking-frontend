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
import axios from "axios";
import ComboBox from "@/components/common/ComboBox";
import { optionsListRoom } from "@/utils/optionsList";
import { optionsListDesk } from "@/utils/optionsList";

export default function Home() {
  const { bookings, refreshBookings, isLoading, date, setDate } = useBookings();
  const { refreshRooms, isLoadingRooms } = useRooms();
  const { currentUser } = useAuth();
  useEffect(() => {
    refreshBookings();
    refreshRooms(date);
  }, [currentUser, date]);

  const [responseDeskData, setResponseDeskData] = useState([]);
  const [responseRoomData, setRessponseRoomData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(optionsListRoom[0]);
  const [selectedOptionDesk, setSelectedOptionDesk] = useState(
    optionsListDesk[0]
  );

  const handleSelectChangeDesk = (newValue) => {
    setSelectedOptionDesk(newValue);
  };

  const handleSelectChange = (newValue) => {
    setSelectedOption(newValue);
  };

  useEffect(() => {
    const fetchDataForDesk = async (name, date) => {
      try {
        const requestBody = { name, date };
        const deskResponse = await axios.post(
          "https://mhp-desk-booking-ai.galitianu.com/predict/desk",
          requestBody
        );
        setResponseDeskData(deskResponse.data);
      } catch (error) {
        console.error("Error fetching desk data:", error);
      }
    };
    const fetchDataForRoom = async (name, date) => {
      try {
        const requestBody = { name, date };
        const roomResponse = await axios.post(
          "https://mhp-desk-booking-ai.galitianu.com/predict/room",
          requestBody
        );
        setRessponseRoomData(roomResponse.data);
        console.log(roomResponse.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    fetchDataForDesk(selectedOptionDesk, "2024-03-01");
    fetchDataForRoom(selectedOption, "2024-03-01");
  }, [currentUser, selectedOption, selectedOptionDesk]);

  return (
    <>
      <Navbar />
      <main>
        <div className="py-6 px-8 w-full lg:flex">
          <div className="mx-4 mb-4 p-8 shadow-lg items-center justify-center rounded w-full">
            {!isLoadingRooms && <SvgMap date={date} />}
          </div>
          <div className="mx-4 flex justify-center lg:justify-start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </div>
        <div className="px-8 lg:flex">
          {!isLoading && (
            <DataTableDemo
              data={bookings}
              currentUser={currentUser}
              refreshBooking={refreshBookings}
              refreshRooms={refreshRooms}
              date={date}
            />
          )}
          <div className="px-2 w-full mt-8 lg:w-1/3 lg:mt-0">
            <div className="shadow-xl p-4 mb-10 w-full ">
              <h5>Peak Days for Desk Occupancy:</h5>
              <div className="pb-2">
                <ComboBox
                  options={optionsListDesk}
                  selected={selectedOptionDesk}
                  onSelect={handleSelectChangeDesk}
                />
              </div>
              <ChartComp1
                labels={[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ]}
                data={responseDeskData.map((number) => number * 100)}
                useClient={true}
              />
            </div>
            <div className="shadow-xl p-4 mb-10 w-full">
              <h5>Prime Meeting Room Hours:</h5>
              <div className="pb-2">
                <ComboBox
                  options={optionsListRoom}
                  selected={selectedOption}
                  onSelect={handleSelectChange}
                />
              </div>
              <ChartComp1
                labels={["9-11", "11-13", "13-15", "15-17"]}
                data={responseRoomData.map((number) => number * 100)}
                useClient={true}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
