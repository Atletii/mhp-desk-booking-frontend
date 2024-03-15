'use client';
import { database } from '@/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import RedirectButton from "@/components/common/RedirectButton";
import BackgroundImage from "../../components/common/BackgroundImage";
import InputField from "@/components/form/InputField";
import { toast } from 'react-toastify';

export default function RegisterPage() {

  function handleSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(database, email, password)
      .then(data => {
        console.log(data, "authData");
      })
      .catch(error => {
        let errorString = error.code;
        if (errorString.startsWith("auth/")) {
          errorString = errorString.slice(5);
        }
        errorString = errorString.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

        toast.error(errorString);
      });
  };

  return (
    <BackgroundImage src={`./images/background.jpg`}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg shadow-xl mx-4 bg-opacity-95">
          <h1 className="p-5 text-blue-800 text-2xl font-extrabold text-center pb-2">
            MHP Desk Booking
          </h1>
          <p className="mb-4">Register</p>
          <form className="p-10 pt-0" onSubmit={(e) => handleSignUp(e)}>
            <InputField
              label="First Name"
              type="text"
              id="first-name"
              placeholder="Maximilian"
              className=""
            />
            <InputField
              label="Last Name"
              type="text"
              id="last-name"
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
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Register</button>
          </form>
        </div>
      </div>
    </BackgroundImage>
  );
}