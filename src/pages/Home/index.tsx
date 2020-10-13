import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './style.css';

import Logo from '../../images/Logo.svg';

export default function Home() {
  return (
    <div id="page-home">
      <div className="content-wrapper">
        <header className="menu">
          <img src={Logo} alt="Logo da marca"/>

          <div className="menu__location">
            <strong>Arapoti</strong>
            <p>Paraná</p>
          </div>
        </header>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <a href="/" className="enter-app">
          <FiArrowRight size={32} color="#8D734B"/>
        </a>
      </div>
    </div>
  )
}
