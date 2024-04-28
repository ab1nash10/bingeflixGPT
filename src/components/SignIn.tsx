import { addUsers } from "@/Store/Slices/userSlice";
import checkValidate from "@/utils/checkValidate";
import { USER_AVATAR } from "@/utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { Button } from "./ui/button";

/**
 * Renders a sign-in form component.
 */
const SignIn = () => {
  const email = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [isSignIn, setSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<
    "Please Enter Valid Email" | "Please Enter Valid Password" | null
  >(null);
  const dispatch = useDispatch();
  /**
   * Handles the form submission.
   */
  const handleSubmitBtn = () => {
    const message = checkValidate(
      email?.current?.value ?? "",
      password?.current?.value ?? ""
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value ?? "",
        password?.current?.value ?? ""
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name?.current?.value ?? "",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              if (auth.currentUser) {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUsers({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              }
            })
            .catch(() => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            `${errorCode}-${errorMessage}` as
              | "Please Enter Valid Email"
              | "Please Enter Valid Password"
              | null
          );
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value ?? "",
        password?.current?.value ?? ""
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(
            `${errorMessage}` as
              | "Please Enter Valid Email"
              | "Please Enter Valid Password"
              | null
          );
        });
    }
  };

  /**
   * Toggles the sign-in state.
   */
  const handleClick = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="signinbody"></div>
      <div className="form absolute flex items-center justify-center rounded-lg text-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-[37px] mt-[-30px] mb-4 py-4 font-semibold font-lato">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className=" h-[56px] w-[314px] font-poppins px-4 border mb-10"
              type="name"
              placeholder="Name"
              required
            />
          )}
          <br />
          <input
            ref={email}
            className=" h-[56px] w-[314px] font-poppins px-4 border"
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            ref={password}
            className=" mt-10 h-[56px] w-[314px]  bg-transparent font-poppins px-4 border"
            type="password"
            placeholder="Password"
            required
          />
          <br />
          <p className="text-red-500 mt-4 font-poppins py-2 px-4">
            {errorMessage}
          </p>

          {/* <p className="font-poppins text-lg">
              <input type="checkbox" /> Remember Me
            </p> */}

          <Button
            className="mt-10 h-[40px] w-[314px] text-white bg-red-600 hover:bg-red-800 font-poppins"
            onClick={handleSubmitBtn}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>

          <p className="mt-8 text-gray-400 font-jost">
            {isSignIn ? "New to Netflix?" : "Already a User?"}
            <span
              className="cursor-pointer text-white px-2 hover:underline pb-5"
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
