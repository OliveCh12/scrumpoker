import React, { useState, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";

type Props = {
  username: string;
  userVote: string;
  isFliped?: boolean;
  isActive: boolean;
  activeUser: any;
  setSelected: () => void;
};

const ScrumItem = (props: Props) => {
  const [isFliped, setIsFliped] = useState(true);

  const highlightActiveUser = () => {
    if (props.username === props.activeUser.userName) {
      return "(You)";
    }
  }

  return (
    <div className={`scrum-table__item`} onClick={props.setSelected}>
      {/* <div
        className={`scrum-table__item-progress ${
          props.isFliped ? "fliped" : ""
        } ${highlightActiveUser() ? "active" : ""}`}
        style={{ width: props.userVote * 10 + "%" }}
      > */}
        <span className="scrum-table__item-username">
          {" "}
          <FaUserCircle /> {props.username} {highlightActiveUser()}
        </span>
        <div className="scrum-table__item-progress">
          <div className="scrum-table__item-progress-value" style={{ width: props.userVote * 10 + "%" }}></div>
        </div>
        <span className="scrum-table__item-uservote">{props.userVote}</span>
      {/* </div> */}
    </div>
  );
};

export default ScrumItem;
