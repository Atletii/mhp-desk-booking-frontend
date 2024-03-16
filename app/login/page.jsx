"use client";
import InputField from "@/components/form/InputField";
import BackgroundImage from "../../components/common/BackgroundImage";
import { database } from "@/firebase/firebaseConfig";
import RedirectButton from "@/components/common/RedirectButton";
import { toast } from "react-toastify";
import Button from "@/components/common/Button";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  function handleSignIn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
      })
      .catch((error) => {
        let errorString = error.code;
        if (errorString.startsWith("auth/")) {
          errorString = errorString.slice(5);
        }
        errorString = errorString
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

        toast.error(errorString);
      });
  }

  return (
    <BackgroundImage src={`./images/background.jpg`}>
      <div className="bg-white rounded-lg shadow-xl mx-4 bg-opacity-90">
        <h1 className="p-5 text-blue-800 text-2xl font-extrabold text-center pb-2">
          MHP Desk Booking
        </h1>
        <p className="mb-4">Login</p>
        <form className="p-10 pt-0" onSubmit={(e) => handleSignIn(e)}>
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
          <RedirectButton text="No Account? Register Here!" path="/register" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </BackgroundImage>
  );
}
