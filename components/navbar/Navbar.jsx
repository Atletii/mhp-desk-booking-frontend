"use client";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  function handleSignOut() {
    logout();
    router.push("/login");
  }

  return (
    <div className="w-full bg-gray-100 shadow-xl bg-opacity-95 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <img src="/images/logo.png" alt="Company Logo" className="h-8" />
          <h1 className="text-gray-700 text-2xl font-extrabold ml-4">
            Desk Booking
          </h1>
        </div>
        <div>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
