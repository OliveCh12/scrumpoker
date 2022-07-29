import React from "react";
import { Link, useParams } from "react-router-dom";
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
        <Link className="app__header-brand" to="/">
          <GiPokerHand size={30} /> ScrumPoker
        </Link>
        <span className="app__header-room-id">
          Room: #{id} <BiShareAlt />
        </span>
      </div>
    </header>
  );
};

export default Header;
