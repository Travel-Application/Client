import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'
import Tower from '../../assets/eiffel-tower.svg';

function LandingPage() {
  return (
    <>
      <div className="main-wrapper">
        <section className="landing-content">
          <h1 className="landing-header">Let us plan your <br /> next destination.</h1>
          <Link to="/form">
            <button className="cta-button button">Start</button>
          </Link>
        </section>
        <Navigation />
        <section className="eiffel-section">
          <img className="eiffel-img" src={Tower} alt="Eiffel Tower." />
        </section>
      </div>
    </>
  )
}

export default LandingPage;