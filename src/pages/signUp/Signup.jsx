import { addDoc, query, where } from "firebase/firestore";
import { auth, userCol } from "../../config/firebase/firebase";
import {
  useAuthState,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import { useEffect, useMemo } from "react";

import { Stack } from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Signup() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  console.log(user);

  const isUserExist = useMemo(
    () => user && query(userCol, where("uid", "==", user.uid)),
    [user]
  );
  const [users] = useCollectionData(isUserExist);
  useEffect(() => {
    if (!!user && !!users && users.length === 0) {
      addDoc(userCol, {
        uid: user?.uid,
        photoURL: user?.photoURL,
        displayName: user?.displayName,
        wishlist: [],
        cart: [],
      });
    }
  }, [user, users]);
  return (
    <form className="p-3 md:p-10 bg-white w-1/2 m-auto mt-24 ">
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
          required
          style={{ background: "#efefef" }}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          placeholder="Enter Your Email"
          required
          style={{ background: "#efefef" }}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          type="password"
          placeholder="Enter Your Password"
          required
          style={{ background: "#efefef" }}
        />
        <p>(OPTIONAL)</p>
        <div className="flex flex-col lg:flex-row gap-3">
          <input
            className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
            placeholder="Your Photo Link"
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
        <button onClick={() => signInWithGoogle()}>sign up with google</button>
        <br />
        <br />
        <button onClick={() => signOut()}>logOut</button>
      </Stack>
    </form>
  );
}
