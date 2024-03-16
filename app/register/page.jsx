"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import RedirectButton from "@/components/common/RedirectButton";
import BackgroundImage from "../../components/common/BackgroundImage";
import InputField from "@/components/form/InputField";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "@/services/axiosConfig";

export default function RegisterPage() {
  const { currentUser, signUp } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const firstName = e.target.firstName.value;
      const lastName = e.target.lastName.value;
      const userData = await signUp(email, password);
      const firebaseId = userData.user.uid;
      await axios.post(baseURL + "/user", {
        email,
        firstName,
        lastName,
        firebaseId,
      });
    } catch (error) {
      console.error(error);
      // let errorString = error.code;
      // if (errorString.startsWith("auth/")) {
      //   errorString = errorString.slice(5);
      // }
      // errorString = errorString
      //   .replace(/-/g, " ")
      //   .replace(/\b\w/g, (char) => char.toUpperCase());
      // toast.error(errorString);
    }
  }

  return (
    <BackgroundImage src={`./images/background.jpg`}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg shadow-xl mx-4 bg-opacity-90">
          <h1 className="p-5 text-blue-800 text-2xl font-extrabold text-center pb-2">
            MHP Desk Booking
          </h1>
          <p className="mb-4">Register</p>
          <form className="p-10 pt-0" onSubmit={(e) => handleSignUp(e)}>
            <InputField
              label="First Name"
              type="text"
              id="firstName"
              placeholder="Maximilian"
              className=""
            />
            <InputField
              label="Last Name"
              type="text"
              id="lastName"
              placeholder="Mustermann"
              className=""
            />
            <InputField
              label="E-Mail"
              type="email"
              id="email"
              placeholder="mustermann@mhp.com"
              className=""
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              placeholder="Password"
              className=""
            />
            <InputField
              label="Confirm Password"
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              className=""
            />
            <RedirectButton
              text="Already have an account? Log in here."
              path="/login"
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    </BackgroundImage>
  );
}
