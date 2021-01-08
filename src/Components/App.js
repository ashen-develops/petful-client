import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage'
import AdoptionPage from './AdoptionPage'

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
              path='/adopt' component={AdoptionPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;