import React from "react";
import {FaUserCircle} from "react-icons/fa" 
type Props = {
  value: number;
  userName: string,
  userType: string,
};

const UserInfos = (props: Props) => {
  return (
    <div className="user-infos">
      <div className="user-infos__header">
        <div className="user-infos__username">
        <FaUserCircle />{props.userName}
        </div>
        <span className="user-infos__type">({props.userType})</span>
      </div>
      <div className="user-infos__progress-container">
      <div className="user-infos__progress-bar" style={{ width: props.value * 10 + "%" }}>
        <span className="user-infos-value">{props.value}</span>
      </div>
      </div>
    </div>
  );
};

export default UserInfos;
