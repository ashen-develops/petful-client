import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <header>
        <h1>Petful</h1>
      </header>
      <h2>Uh Oh!</h2>
      <p>
        Looks like your url doesn't match any of our pages. Try going back, or
        click <Link to="/">here</Link> to go home.
      </p>
    </>
  );
}
