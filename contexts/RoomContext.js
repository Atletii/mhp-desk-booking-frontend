import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";
import { sendRequestWithBearerToken } from "@/services/axiosConfig";

// Create the context
const RoomContext = createContext();

export const useRooms = () => useContext(RoomContext);

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [isLoadingRooms, setisLoadingRooms] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  const fetchRooms = async (date) => {
    setisLoadingRooms(true);
    setError(null);
    try {
      const responseRooms = await sendRequestWithBearerToken(
        "get",
        `/rooms/${date.toISOString().split("T")[0]}`,
        null,
        currentUser
      );
      setRooms(responseRooms.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setisLoadingRooms(false);
    }
  };

  // Pass down fetchRooms with the current date state
  const value = { rooms, isLoadingRooms, error, refreshRooms: fetchRooms };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
