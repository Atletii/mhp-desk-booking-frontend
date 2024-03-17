"use client";
import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import SvgMap from "@/components/map/SvgMap";
import Navbar from "@/components/navbar/Navbar";
import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import ChartComp1 from "@/components/chart/ChartComp1";
import CreateAppointment from "@/components/modal/CreateAppointment";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  // sendRequestWithBearerToken("get", "/bookings/2024-01-01", null)
  //   .then((response) => {
  //     console.log("GET request successful:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error in GET request:", error);
  //   });

  const [date, setDate] = useState(new Date());
  const [aiData, setAiData] = useState([]);
  const [responseDeskData, setResponseDeskData] = useState([]);
  const [responseRoomData, setRessponseRoomData] = useState([]);

  useEffect(() => {
    const fetchDataForDesk = async (name, date) => {
      try {
        const requestBody = { name, date };
        const deskResponse = await axios.post(
          "http://127.0.0.1:8000/predict/desk",
          requestBody
        );
        // console.log("Desk response:", deskResponse.data);
        setResponseDeskData(deskResponse.data);
      } catch (error) {
        console.error("Error fetching desk data:", error);
      }
    };

    const fetchDataForRoom = async (name, date) => {
      try {
        const requestBody = { name, date };
        const roomResponse = await axios.post(
          "http://127.0.0.1:8000/predict/room",
          requestBody
        );
        // console.log("Room response:", roomResponse.data);
        setRessponseRoomData(roomResponse.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    // Example usage
    fetchDataForDesk("CLUJ_5_beta_5.3", "2024-03-01");
    fetchDataForRoom("Cockpit", "2024-03-01");
  }, []);

  console.log(responseDeskData);
  console.log(responseRoomData);

  return (
    <>
      <Navbar />
      <main className="p-3">
        <div className="flex flex-col lg:flex-row py-6">
          {/* Map Section */}

          <div className="lg:w-3/4 mx-4 lg:mx-0 lg:mb-0 lg:p-8 lg:shadow-lg lg:items-center rounded-md border">
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
              data={responseDeskData.map((number) => number * 100)}
              useClient={true}
            />
            <ChartComp1
              labels={["9-11", "11-13", "13-15", "15-17"]}
              data={responseRoomData.map((number) => number * 100)}
              useClient={true}
            />
          </div>
        </div>
      </main>
    </>
  );
}
