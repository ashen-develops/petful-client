import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage'
import AdoptionPageOne from './AdoptionPage'
import AdoptionPageTwo from './AdoptionPageTwo'
import Congrats from './CongratsPage'

class App extends Component {

  render() {
    return (
      <div className='App'>
      
        <main role='main' className='App-main'>
          <Switch>
            <Route
              exact path='/' component={LandingPage}
            />
            <Route
              path='/adopt1' component={AdoptionPageOne}
            />
            <Route
              path='/adopt2' component={AdoptionPageTwo}
            />
            <Route
              path='/congrats' component={Congrats}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;