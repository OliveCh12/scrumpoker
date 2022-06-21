import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { GiPokerHand } from "react-icons/gi";

import Header from "../Header/index";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <Header />
      <div className="home__section">
        <div className="home__section-wrapper">
          <h2>Scrum Poker for agile development teams</h2>
          <p>
            Have fun while being productive with our simple and complete tool.
          </p>
        </div>
      </div>
      <div className="home__section">
        <div className="home__section-container">
          <h3>
            <FaPlayCircle size={25} /> Démarrer une nouvelle session{" "}
          </h3>
          <p>
            Choissiez d'être spéctateur ou joueur et partagez ce lien à d'autres
            utilisateur afin de démarrer un nouvelle session.
          </p>

          <form className="form form--home" action="">
            <input type="text" placeholder="Your name" />

            <div className="form__items">
              <div className="form__item">
                <GiPokerHand size={30} />
                <span className="form__item-title">Player</span>
              </div>
              <div className="form__item">
                <FaPlayCircle size={25} />
                <span className="form__item-title">Spectator</span>
              </div>
            </div>
          </form>
          <Link to={"/session/3424235"} className="button">
            Start Session
          </Link>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Home;
