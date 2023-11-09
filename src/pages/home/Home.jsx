import Hero from "../../Components/hero/Hero";
import style from "./Home.module.css";
import HomeSlider from "../../Components/homeSlider/HomeSlider";
import HomeListing from "../../Components/homeListing/HomeListing";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, userCol } from "../../config/firebase/firebase";
import { addDoc, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useMemo } from "react";

export default function Home() {
  const [userAuth] = useAuthState(auth);
  console.log("apppp user", userAuth);
  const isUserExist = useMemo(
    () => userAuth && query(userCol, where("uid", "==", userAuth.uid)),
    [userAuth]
  );
  const [users] = useCollectionData(isUserExist);
  console.log(users?.[0]);

  return (
    <section id="home" className={style.home}>
      <Hero />
      <HomeSlider />
      <HomeListing />
    </section>
  );
}
