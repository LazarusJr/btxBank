import React from "react";
import { UserProfileIcon } from "../../../Styles/UserProfile.styled";
import { bool, func } from "prop-types";

const UserProfile = ({
  userOpen = { userOpen },
  setuserOpen = { setuserOpen },
}) => {
  return (
    <UserProfileIcon
      userOpen={userOpen}
      onClick={() => setuserOpen(!userOpen)}
    />
  );
};
UserProfile.prototype = {
  userOpen: bool.isRequired,
  setuserOpen: func.isRequired,
};

/* userOpen which is the state - bool (either true or false) is required nothing else and same as the function which is setUseropen is required */

export default UserProfile;
