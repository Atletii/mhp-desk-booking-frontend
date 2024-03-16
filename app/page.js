"use client";
import { DataTableDemo } from "@/components/data-table/RoomsDataTable";
import { Calendar } from "@/components/ui/calendar";
import Navbar from "@/components/navbar/Navbar";
import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();
  const myBearerToken = currentUser.accessToken;
  console.log(myBearerToken);
  sendRequestWithBearerToken("get", "/bookings/2024-01-01", null, myBearerToken)
    .then((response) => {
      console.log("GET request successful:", response.data);
    })
    .catch((error) => {
      console.error("Error in GET request:", error);
    });
  return (
    <>
      <Navbar />
      <main>
        <div className="flex p-2">
          <div className="w-2/3 p-4 shadow-lg">
            <DataTableDemo />
          </div>

          <div className="w-1/3 p-4 shadow-lg">
            <div className="flex flex-col">
              <Calendar />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
