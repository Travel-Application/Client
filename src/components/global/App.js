import React from 'react';
import LandingPage from '../landingpage/LandingPage';
import Questionaire from '../forms/wizard/Questionaire';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/form" component={Questionaire} />
      </Switch>
    </>
  );
}

export default App;