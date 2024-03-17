import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import { useAuth } from "@/contexts/AuthContext";
import { useRooms } from "@/contexts/RoomContext";
import { useBookings } from "@/contexts/BookingContext";

export default function Modal({ isOpen, onClose, room, date }) {
  const { refreshBookings } = useBookings();
  const { refreshRooms } = useRooms();
  const [fromTime, setFromTime] = useState();
  const [toTime, setToTime] = useState();
  const [allDay, setAllDay] = useState(false);
  const [members, setMembers] = useState(1);

  let isBigRoom = false;
  if (room) {
    isBigRoom =
      room.mapId === 421 ||
      room.mapId === 424 ||
      room.mapId === 427 ||
      room.mapId === 415 ||
      room.mapId === 418 ||
      room.mapId === 13;
    console.log(isBigRoom);
  }

  const { currentUser } = useAuth();

  useEffect(() => {
    if (allDay) {
      setFromTime("08:00");
      setToTime("20:00");
    }
  }, [allDay]);

  const checkTime = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    if (hours < 8 || hours > 20 || (hours === 20 && minutes > 0)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    console.log(room);
    e.preventDefault();
    if (!checkTime(fromTime) || !checkTime(toTime)) {
      toast.error("Selected time must be between 08:00 and 20:00.");
      return;
    }

    if (members > nrPlaces) {
      toast.error("Too many members selected.");
    }

    let bookingDate =
      typeof date === "string" ? new Date(date) : new Date(date.getTime());

    const fromHours = parseInt(fromTime.split(":")[0], 10) + 2;
    const fromMinutes = parseInt(fromTime.split(":")[1], 10);
    bookingDate.setHours(fromHours, fromMinutes, 0, 0);
    const bookedFrom = bookingDate.toISOString();

    const toHours = parseInt(toTime.split(":")[0], 10) + 2;
    const toMinutes = parseInt(toTime.split(":")[1], 10);
    bookingDate.setHours(toHours, toMinutes, 0, 0);
    const bookedTo = bookingDate.toISOString();
    await sendRequestWithBearerToken(
      "post",
      "bookings",
      {
        roomId: room.id,
        bookedFrom: bookedFrom,
        bookedTo: bookedTo,
        members: members,
      },
      currentUser
    );
    setTimeout(() => {
      refreshRooms(date);
      refreshBookings();
    }, 1000);
    toast.success("Appointment booked successfully!");
  };

  if (!isOpen) return null;

  const formattedDate =
    typeof date === "string"
      ? format(parseISO(date), "dd.MM.yyyy")
      : format(date, "dd.MM.yyyy");

  return (
    <div
      className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
      id="myModal"
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Create Appointment: {room.name}
          </h3>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mt-4 mb-4">
              <h3 className="text-sm font-medium text-gray-700">
                Day: {formattedDate}
              </h3>
            </div>
            <div className="mb-2">
              <label
                htmlFor="from"
                className="block text-sm font-medium text-gray-700"
              >
                From:
              </label>
              <input
                type="time"
                id="from"
                name="from"
                className="mt-1 p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
                disabled={allDay}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="to"
                className="block text-sm font-medium text-gray-700"
              >
                To:
              </label>
              <input
                type="time"
                id="to"
                name="to"
                className="mt-1 p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
                disabled={allDay}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="to"
                className="block text-sm font-medium text-gray-700"
              >
                Members:
              </label>
              <input
                type="int"
                id="to"
                name="to"
                className="mt-1 p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                disabled={!isBigRoom}
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                id="all-day"
                name="all-day"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
              />
              <label
                htmlFor="all-day"
                className="ml-2 block text-sm text-gray-900"
              >
                All Day
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Book
              </button>
              <button
                id="closeModalButton"
                onClick={onClose}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
