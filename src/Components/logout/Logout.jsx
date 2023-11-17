import { auth } from "../../config/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Store/auth-slice";
import styles from "./logout.module.css";
import { useNavigate } from "react-router";
import { initState, initDbData } from "../../Redux/Slices/myPcDataSlice";
import { reset } from "../../Redux/Slices/myPcCartSlice";

function Logout() {
  const dispatch = useDispatch();
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        signOut();
        dispatch(logout());
        navigate("/");
        dispatch(initDbData(initState));
        dispatch(reset());
      }}
      className={styles.logout_btn}
    >
      Logout
    </button>
  );
}

export default Logout;
