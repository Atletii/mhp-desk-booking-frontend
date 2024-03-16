"use client";
import { BookingProvider } from "@/contexts/BookingContext";
import { AuthProvider } from "../contexts/AuthContext";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BookingProvider>{children}</BookingProvider>
    </AuthProvider>
  );
};
