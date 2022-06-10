import React, { useState, useEffect } from "react";

import ScrumItem from "./ScrumItem";

interface Props {
  data: any;
  activeUser: any;
  setSelected: (username: string) => void;
}

const ScrumTable = (props: Props) => {

  function setSelectedUser(username: string) {
    return username && true
  }
  return (
    <div className="scrum-table">
      <div className="scrum-table__container">
        {props.data.map((user: any) => (
          <ScrumItem
            username={user.userName}
            userVote={user.userVote}
            activeUser={props.activeUser}
            setSelected={() => props.setSelected(user.userName) }
          />
        ))}
      </div>
    </div>
  );
};

export default ScrumTable;
