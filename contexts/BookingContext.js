import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { baseURL, sendRequestWithBearerToken } from "@/services/axiosConfig";
import { useRooms } from "@/contexts/RoomContext";

// Create the context
const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();
  const { refreshRooms } = useRooms();
  const [date, setDate] = useState(new Date());

  let eventSource;

  const fetchBookings = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const responseBookings = await sendRequestWithBearerToken(
        "get",
        "bookings",
        null,
        currentUser
      );
      setBookings(responseBookings.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const initializeSSE = () => {
    if (currentUser && currentUser.accessToken) {
      const url = new URL(baseURL + "/bookings/events");

      eventSource = new EventSource(url.toString());

      eventSource.onmessage = (event) => {
        const eventData = JSON.parse(event.data);
        const firebaseId = eventData.booking.user.firebaseId;
        if (firebaseId != currentUser.uid) {
          fetchBookings();
          refreshRooms(date);
        }
      };

      eventSource.onerror = (error) => {
        console.error("EventSource failed:", error);
        eventSource.close();
      };
    }
  };

  useEffect(() => {
    fetchBookings();
    initializeSSE();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  const value = {
    bookings,
    isLoading,
    error,
    date,
    setDate,
    refreshBookings: fetchBookings,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
