import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaGithub } from "react-icons/fa";

import Header from "../Header/index";
import NewUserForm from "./NewUserForm";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <Header />
      <div className="home__section">
        <div className="home__section-wrapper">
          <h2>Scrum Poker for agile development teams</h2>
          <p>Have fun while being productive with our simple and complete tool.</p>
          <p>
            Contribute to this project by cloning this respository <FaGithub></FaGithub>
          </p>
        </div>
      </div>
      <div className="home__section">
        <div className="home__section-container">
          <h3>
            <FaPlayCircle size={20} /> Démarrer une nouvelle session{" "}
          </h3>
          <p>Choissiez d'être spéctateur ou joueur et partagez ce lien à d'autres utilisateur afin de démarrer un nouvelle session.</p>
          <NewUserForm />
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
