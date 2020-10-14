import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./style.css";

import Logo from "../../images/Logo.svg";

export default function Home() {
  return (
    <div id="page-home">
      <div className="content-wrapper">
        <header className="menu">
          <a href="/">
            <img src={Logo} alt="Logo da marca" />
          </a>

          <div className="menu__location">
            <strong>Arapoti</strong>
            <p>Paraná</p>
          </div>
        </header>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={32} color="rgba(0, 0, 0, 0.7)" />
        </Link>
      </div>
    </div>
  );
}
