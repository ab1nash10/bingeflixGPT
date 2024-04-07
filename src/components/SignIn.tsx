import { useState } from "react";
import Header from "./Header";
import { Button } from "./ui/button";

const SignIn = () => {
  const [isSignIn, setSignIn] = useState(true);
  const handleClick = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="signinbody"></div>
      <div className="form absolute flex items-center justify-center  rounded-lg">
        <form action="">
          <h1 className="text-[37px] mt-[-60px] mb-4 py-4 font-bold font-sans">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              className=" h-[56px] w-[314px] font-poppins px-4 border mb-10"
              type="name"
              placeholder="Name"
              required
            />
          )}
          <br />
          <input
            className=" h-[56px] w-[314px] font-poppins px-4 border"
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            className=" mt-10 h-[56px] w-[314px]  bg-transparent font-poppins px-4 border"
            type="password"
            placeholder="Password"
            required
          />
          <br />
          <Button className="mt-10 h-[40px] w-[314px] text-white bg-red-600 hover:bg-red-800 font-poppins">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>

          <p className="mt-8 text-gray-400 font-jost">
            {isSignIn ? "New to Netflix?" : "Already a User?"}
            <span
              className="cursor-pointer text-white px-2 hover:underline"
              onClick={handleClick}
            >
              {isSignIn ? "Sign Up now." : "Sign In now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
