import React, { Component } from 'react'
import './App.css';

import { Accueil } from './composants'
import CourtMetrages from './composants/court-metrages/CourtMetrages';
import Clips from './composants/clips/Clips'
import Footer from './composants/footer/Footer'
import Pubs from './composants/pubs/Pubs'
import Dessins from './composants/dessins/Dessins'
import Apropos from './composants/apropos/Apropos'
import FlecheGoTop from './composants/FlecheGoTop/FlecheGoTop';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTopRoute from './composants/ScrollToTopRoute/ScrollToTopRoute';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Accueil} />
            <ScrollToTopRoute path="/courtsmetrages" component={CourtMetrages} />
            <ScrollToTopRoute path="/clips" component={Clips} />
            <ScrollToTopRoute path="/animations" component={Pubs} />
            <ScrollToTopRoute path="/dessins" component={Dessins} />
            <ScrollToTopRoute path="/apropos" component={Apropos} />
          </Switch>
          <FlecheGoTop />
          <Footer />
        </div>
      </Router>
      
    )
  }
}

