import React from "react";
import { auth } from "../../config/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Store/auth-slice";
import styles from "./logout.module.css";

function Logout() {
  const dispatch = useDispatch();
  const [signOut] = useSignOut(auth);

  return (
    <button
      onClick={() => {
        signOut();
        dispatch(logout());
        window.location.href = "/";
      }}
      className={styles.logout_btn}
    >
      Logout
    </button>
  );
}

export default Logout;
