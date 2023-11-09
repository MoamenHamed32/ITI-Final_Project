import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FaceIcon from "@mui/icons-material/Face";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./userData.module.css";

const UserData = ({ user }) => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_left_content}>
        <img src={user.photo} alt={user.name} className={styles.user_photo} />
        <div className={styles.profile_left_content_w_i}>
          <div className={styles.profile_left_content_ele}>
            <div className={styles.profile_left_content_ele_svg}>
              <FaceIcon />
            </div>
            <p>
              <span> {user.name}</span>
            </p>
          </div>
          <div className={styles.profile_left_content_ele}>
            <div className={styles.profile_left_content_ele_svg}>
              <EmailIcon />
            </div>
            <p>
              <span> {user.email}</span>
            </p>
          </div>
          <div className={styles.profile_left_content_ele}>
            <div className={styles.profile_left_content_ele_svg}>
              <PhoneIcon />
            </div>
            <p>
              <span> {user.phone}</span>
            </p>
          </div>
          <div className={styles.profile_left_content_ele}>
            <div className={styles.profile_left_content_ele_svg}>
              <LocationOnIcon />
            </div>
            <p>
              <span> {user.address}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.profile_right_content}>
        <p>
          <span className={styles.ele_svg}>
            <FavoriteIcon />
          </span>
          <span>{user.favorite.length}</span>
        </p>
        <p>
          <span className={styles.ele_svg}>
            <ShoppingCartIcon />
          </span>
          <span>{user.addToCard.length}</span>
        </p>
      </div>
    </div>
  );
};

export default UserData;
