import React from "react";
import { auth } from "../../config/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";

function Logout() {
  const [signOut] = useSignOut(auth);
  return (
    <button type="button" onClick={() => signOut()}>
      logOut
    </button>
  );
}

export default Logout;
