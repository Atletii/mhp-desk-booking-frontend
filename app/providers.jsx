"use client";
import { BookingProvider } from "@/contexts/BookingContext";
import { AuthProvider } from "../contexts/AuthContext";
import { RoomProvider } from "@/contexts/RoomContext";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BookingProvider>
        <RoomProvider>{children}</RoomProvider>
      </BookingProvider>
    </AuthProvider>
  );
};
