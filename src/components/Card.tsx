import React, { useCallback } from "react";

type Props = {
  value: number;
  onCardClick: any
  userCount: number;
};

const Card = (props: Props) => {

  return (
    <div className={`card ${props.userCount === props.value ? "active" : ""}`} onClick={props.onCardClick}>
      {props.value}
    </div>
  );
};

export default Card;
