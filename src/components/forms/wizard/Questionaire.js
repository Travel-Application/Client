import React from 'react';
import Budget from '../../../assets/budget.svg';

function Questionaire() {

  return (
    <div className="form-wrapper">
      <h1 className="form-number-header">1/8</h1>
      <form className="questions-form">
        <h2 className="input-header">
          WHAT IS YOUR <span>BUDGET</span>?
        </h2>
        <hr />
        <input 
          type="text" 
          name="budget"
        />
      </form>
      <img className="budget-form-img form-img" src={Budget} alt="Piggy Bank" />
      <button className="next-button">NEXT</button>
    </div>
  )
}

export default Questionaire;