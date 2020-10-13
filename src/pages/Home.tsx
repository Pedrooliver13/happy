import React from 'react';
import Logo from '../images/Logo.svg';

export default function Home() {
  return (
    <div id="page-home">
      <div className="content-wrapper">
        <img src={Logo} alt="Logo da marca"/>

        <main></main>
      </div>
    </div>
  )
}
