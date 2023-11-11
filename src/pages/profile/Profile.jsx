import { useState } from "react";
import UserData from "../../Components/usersData/UserData";
import EditUserData from "../../Components/editUserData/EditUserData";
import ChangePassword from "../../Components/changePass/ChangePassword";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import styles from "./profile.module.css";

const dummyUserData = {
  name: "ACE of Hunter",
  email: "ACEofHunter@example.com",
  photo:
    "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
  phone: "123-456-7890",
  address: "123 Main St, City, Country",
  addToCard: [{}, {}],
  favorite: [{}, {}, {}],
};

const Profile = () => {
  const [activeButton, setActiveButton] = useState("UserData");

  const handleEditClickUserBtn = () => {
    setActiveButton("UserData");
  };
  const handleEditClickEditBtn = () => {
    setActiveButton("EditUserData");
  };
  const handleEditClickChangePassBtn = () => {
    setActiveButton("ChangePass");
  };

  return (
    <div className={styles.profile_container}>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex-col">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            <span className="text-base md:text-base lg:text-lg xl:text-xl">
              {dummyUserData.name}
            </span>
          </Typography>
        </div>
        <List>
          <ListItem
            className={
              activeButton === "UserData"
                ? styles.active_select
                : styles.not_active_select
            }
            onClick={handleEditClickUserBtn}
          >
            User Data
          </ListItem>
          <ListItem
            className={
              activeButton === "EditUserData"
                ? styles.active_select
                : styles.not_active_select
            }
            onClick={handleEditClickEditBtn}
          >
            Edit User Data
          </ListItem>
          <ListItem
            className={
              activeButton === "ChangePass"
                ? styles.active_select
                : styles.not_active_select
            }
            onClick={handleEditClickChangePassBtn}
          >
            Change Password
          </ListItem>
        </List>
      </Card>
      <div className={styles.profile_content}>
        {activeButton === "EditUserData" ? (
          <EditUserData user={dummyUserData} />
        ) : activeButton === "ChangePass" ? (
          <ChangePassword />
        ) : (
          <UserData user={dummyUserData} />
        )}
      </div>
    </div>
  );
};

export default Profile;
