import React, { useEffect, useMemo } from "react";
import { addDoc, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { userCol, auth } from "../../config/firebase/firebase";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { signup } from "../../Redux/Store/auth-slice";
import { useDispatch, useSelector } from "react-redux";

const myPc = {
  monitor: "",
  mouse: "",
  keyboard: "",
  speaker: "",
  caseHardWare: {
    case: "",
    ramOne: "",
    ramTwo: "",
    ramThree: "",
    ramFour: "",
    vga: "",
    powerSupply: "",
    board: "",
    cpu: "",
    hardDesk: "",
    secondaryHardDesk: "",
    fan: "",
  },
};
function SignupWithGmail() {
  const dispatch = useDispatch();
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
      const newUser = {
        uid: user?.uid,
        photoURL: user?.photoURL,
        displayName: user?.displayName,
        wishlist: [],
        cart: [],
        myPc: myPc,
      };

      addDoc(userCol, newUser);
      dispatch(signup({ token: user.accessToken, user: newUser }));
    }
    // if (!!user && !!users && users.length > 0) {
    //   console.log("the onther collection", user);
    //   //user.accessToken
    //   console.log("the onther collection", users[0]);
    //   dispatch(signup({ token: user.accessToken, user: users[0] }));
    // }
  }, [user, users]);

  return (
    <button type="button" onClick={() => signInWithGoogle()}>
      sign up with google
    </button>
  );
}

export default SignupWithGmail;
