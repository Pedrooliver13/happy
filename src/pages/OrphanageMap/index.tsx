import React from "react";
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import './style.css';

import LogoImg from "../../images/Local.svg";

function OrphanageMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={LogoImg} alt="Logo" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Arapoti</strong>
          <p>Paraná</p>
        </footer>
      </aside>

      <Link to="/" className="create-orphanage">
        <FiPlus size={24} color="#fff"/>
      </Link>
    </div>
  );
}

export default OrphanageMap;
