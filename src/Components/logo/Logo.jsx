import { Link } from "react-router-dom";
import styles from "./logo.module.css";
const Logo = () => {
  return (
    <figure className={styles.nav_logo}>
      <Link to="/">
        <img
          className={styles.logo_img}
          src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/logo.svg?alt=media&token=438df8d1-9c89-4176-837e-34d150faa1fe"
          alt=".."
        />
        <span className={styles.logo_na}>TechnoMatic</span>
      </Link>
    </figure>
  );
};
export default Logo;
