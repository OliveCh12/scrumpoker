import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
import { GiPokerHand } from "react-icons/gi";

type Props = {
  id?: number;
};

const Header = (props) => {
  const { id } = useParams();

  return (
    <header className="app__header">
      <div className="app__header-container">
        <h1 className="app__header-brand">
          <GiPokerHand size={25} /> ScrumPoker
        </h1>
        <span className="app__header-room-id">
          Room: #{id} <BiShareAlt />
        </span>
      </div>
    </header>
  );
};

export default Header;
