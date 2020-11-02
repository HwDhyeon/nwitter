import { authService } from "fb";
import React from "react";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  const onLogoutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <span>Profile</span>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  );
};

export default Profile;
