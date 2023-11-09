import React, { useEffect, useMemo } from "react";
import { addDoc, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { userCol, auth } from "../../config/firebase/firebase";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";

function SignupWithGmail() {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const isUserExist = useMemo(
    () => user && query(userCol, where("uid", "==", user.uid)),
    [user]
  );
  const [users] = useCollectionData(isUserExist);
  useEffect(() => {
    if (!!user && !!users && users.length === 0) {
      console.log("acc with Gmail has been created");
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
    <button type="button" onClick={() => signInWithGoogle()}>
      sign up with google
    </button>
  );
}

export default SignupWithGmail;
