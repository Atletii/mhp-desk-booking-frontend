import { sendRequestWithBearerToken } from "@/services/axiosConfig";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

// Create the context
const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const responseBookings = sendRequestWithBearerToken(
          "get",
          "bookings",
          null,
          currentUser
        );

        if (!response.ok) throw new Error("Failed to fetch bookings");

        const data = await response.json();
        setBookings(data.content); // Adjust based on how your data is structured
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const value = { bookings, isLoading, error };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
