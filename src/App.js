import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Home from './components/Home.js';
import Header from './components/Header.js';
import Services from './components/Services.js';
import Footer from './components/Footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="" component={Footer} />

      </div>
    );
  }
}

export default App;

//home, about us, services, news, contact
