import React from "react";
import { auth } from "../../config/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Store/auth-slice";

function Logout() {
  const dispatch = useDispatch();
  const [signOut] = useSignOut(auth);
  return (
    <button
      type="button"
      onClick={() => {
        signOut();
        dispatch(logout());
      }}
    >
      logOut
    </button>
  );
}

export default Logout;
