import React, { useState } from "react";

type Props = {
  data: any;
};

type UserType = {
  userType: string;
  userName: string;
  userVote: number;
};

const Summary = (props: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  const calculateAverage = (users: Array<UserType>) => {
    let average =
      users.reduce(
        (accumultaor: number, user: object) => accumultaor + user.userVote,
        0
      ) / users.length;

    return Math.round(average * 10) / 10;
  };

  const calculateTotalResponses = (users: Array<UserType>) => {
    let total = users.filter((user) => user.userVote !== null);
    return total.length;
  };

  return (
    <div
      className={`summary ${isHidden ? "summary--hidden" : ""}`}
      onClick={() => setIsHidden(!isHidden)}
    >
      <div className="summary__container">
      {/* <span>Revel Cards</span> */}
        <div className="summary__section">
          <span className="summary__section-value">
            {calculateAverage(props.data)}
          </span>
          <span className="summary__section-title">Average</span>
        </div>
        <div className="summary__section">
          <span className="summary__section-value">78%</span>
          <span className="summary__section-title">Agreement</span>
        </div>
        <div className="summary__section">
          <span className="summary__section-value">
            {calculateTotalResponses(props.data)} / {props.data.length}
          </span>
          <span className="summary__section-title">Responses</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
