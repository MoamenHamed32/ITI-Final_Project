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
      onClick={() => {
        signOut();
        dispatch(logout());
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Logout
    </button>
  );
}

export default Logout;
