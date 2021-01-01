import React, { Component } from "react";

export default class ErrorPage extends Component {

  state = {
    error: null,
  };

  static StateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <main className="error-page">
          <h1>Oh no! Something is Awry</h1>
          <p>Try refreshing the page</p>
		  <p>If that doesn't work PANIC!</p>
          <p>{this.state.error}</p>
        </main>
      );
    }
    return this.props.children;
  }
}
