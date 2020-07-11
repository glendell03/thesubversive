import React from "react";
import { auth } from "../../firebase/firebase.utils";
import CustomButton from "../../components/custom-button/custom-button";

import {UserOutlined} from "@ant-design/icons"

import "./account-page.styles.scss";

const AccountPage = () => {
  var user = auth.currentUser;
  var name, email, photoUrl;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
  }
  return (
    <div className="account-page">
      <h1>My Account</h1>
      <div className="profile">
          {photoUrl ? <img src={photoUrl} alt="profile" className="photo-url" /> : <UserOutlined className="photo-url"/>}
      </div>
      <h2>Welcome {name || email}</h2>
      <CustomButton onClick={() => auth.signOut()}>Sign out</CustomButton>
    </div>
  );
};

export default AccountPage;
