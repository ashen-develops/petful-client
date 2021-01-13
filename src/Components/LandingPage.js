import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <h1>Petful</h1>
        <h2>
          Petful is an adoption tool
        </h2>
        <p>
          The first animal that gets admitted to our shelter is the first one
          that gets adopted.
        </p>
        <img
          alt='this is adoption'
          src='https://i.insider.com/51cd94f0eab8eaae1800001b'
        />
        <Link to='/adopt1'>
          <button> Preview Adoptions </button>
        </Link>
      </div>
    );
  }
}

export default Home;