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
        <h1 className="text-blue-800 text-2xl font-extrabold">
          MHP Desk Booking
        </h1>
        <div>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
