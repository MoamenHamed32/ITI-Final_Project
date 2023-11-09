import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import SignupWithGmail from "../../Components/signupGmail/SignupWithGmail";
import Logout from "../../Components/logout/Logout";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { addDoc } from "firebase/firestore";
import { userCol, auth } from "../../config/firebase/firebase";
import { useEffect, useState } from "react";

export default function Signup() {
  const [userInfo, setUserInfo] = useState();
  const [userAuth] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (!error && userAuth && user) {
      console.log("inside email add doc");
      addDoc(userCol, {
        uid: userAuth?.uid,
        photoURL: userInfo?.photoURL || "",
        displayName: userInfo?.displayName || "",
        email: userAuth?.email,
        wishlist: [],
        cart: [],
      });
    }
  }, [userAuth, error]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    // console.log(data);
    setUserInfo(data);

    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <form
      className="p-3 md:p-10 bg-white w-1/2 m-auto mt-24 "
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="start"
        spacing={2}
      >
        <h1 className="text-xs sm:text-sm md:text-lg text-neutral-700 font-bold">
          NEW CUSTOMERS
        </h1>
        <p className="text-xs md:text-base text-neutral-400">
          If you have an account with us, Please login!
        </p>
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          placeholder="Enter Your Name"
          style={{ background: "#efefef" }}
          {...register("displayName", { required: true, maxLength: 20 })}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          placeholder="Enter Your Email"
          style={{ background: "#efefef" }}
          {...register("email", { required: true })}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          type="password"
          placeholder="Enter Your Password"
          style={{ background: "#efefef" }}
          {...register("password", { required: true })}
        />
        <p>(OPTIONAL)</p>
        <div className="flex flex-col lg:flex-row gap-3">
          <input
            className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
            placeholder="Your Photo Link"
            {...register("photoURL", { required: true })}
            style={{ background: "#efefef" }}
            type="text"
          />
          <input
            className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
            placeholder="Your Phone"
            style={{ background: "#efefef" }}
          />
          <input
            className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
            placeholder="Your Adress"
            style={{ background: "#efefef" }}
          />
        </div>
        <button
          type="submit"
          style={{ background: "#C87065", marginTop: "40px" }}
          className="text-white px-7 py-2 text-xs sm:text-sm md:text-base"
        >
          SIGNUP
        </button>

        <SignupWithGmail />
        <br />
        <br />
        <Logout />
      </Stack>
    </form>
  );
}
