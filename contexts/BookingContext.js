import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

// Create the context
const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

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

  const value = { bookings, isLoading, error, refreshBookings: fetchBookings };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
