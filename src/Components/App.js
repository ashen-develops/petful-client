
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import AdoptionPage from "./AdoptionPage";
import ErrorPage from "./ErrorPage";
import PageNotFound from "./PageNotFound"

class App extends React.Component {

  renderMainRoutes = () => {
      return (
          <Switch>
            <Route path='/adopt' component={AdoptionPage} />
            <Route path='/' component={LandingPage} />
            <Route component={PageNotFound} />
          </Switch>

      )
  }
  render() {
    return (
        <div>
        <ErrorPage>
            <main className='AppMain'>{this.renderMainRoutes()}</main>
        </ErrorPage>
        </div>
    );
  }
}

export default App;