import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHearthIcon from '../../assets/images/icons/purple-heart.svg'



function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"/>
      </div>

      <div className="buttons-container">
        <a href="" className="study">
          <img src={studyIcon} alt="Estudar"/>
          Estudar
        </a>

        <a href="" className="study">
          <img src={giveClassesIcon} alt="Estudar"/>
          Estudar
        </a>
      </div>

      <span className="total-connections">
        Total de 200 conexoes ja realizadas <img src={purpleHearthIcon} alt="Coracao roxo"/>
      </span>
    </div> 
  )
}

export default Landing