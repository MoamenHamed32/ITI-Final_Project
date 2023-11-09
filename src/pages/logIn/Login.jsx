import { Stack } from "@mui/material";
import { userCol, auth } from "../../config/firebase/firebase";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { query, where } from "firebase/firestore";

export default function Login() {
  const [userAuth] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const isUserExist = useMemo(
    () => user && query(userCol, where("uid", "==", user.user.uid)),
    [user]
  );
  const [users] = useCollectionData(isUserExist);

  useEffect(() => {
    if (!!user && !error && !!users && users.length > 0) {
      console.log("user loginin", user);
      console.log(users);
    }
  }, [user, error]);
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
          REGISTERED CUSTOMERS
        </h1>
        <p className="text-xs md:text-base text-neutral-400">
          If you have an account with us, Please login!
        </p>
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          placeholder="Enter Your Email"
          required
          style={{ background: "#efefef" }}
          {...register("email", { required: true })}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          type="password"
          placeholder="Enter Your Password"
          required
          style={{ background: "#efefef" }}
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          style={{ background: "#C87065", marginTop: "40px" }}
          className="text-white px-7 py-2 text-xs sm:text-sm md:text-base"
        >
          LOGIN
        </button>
      </Stack>
    </form>
  );
}
