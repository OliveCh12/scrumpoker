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

  React.useEffect(() => {
    console.log(props.setSelected())
  }, [])


  return (
    <div className={`scrum-table__item`} onClick={props.setSelected}>
      <div
        className={`scrum-table__item-progress ${
          props.isFliped ? "fliped" : ""
        } ${highlightActiveUser() ? "active" : ""}`}
        style={{ width: props.userVote * 10 + "%" }}
      >
        <span className="scrum-table__item-username">
          {" "}
          <FaUserCircle /> {props.username} {highlightActiveUser()}
        </span>
        <span className="scrum-table__item-uservote">{props.userVote}</span>
      </div>
    </div>
  );
};

export default ScrumItem;
