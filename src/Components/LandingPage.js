import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h1>Petful</h1>
        <p>
          {' '}
          Petful is an adoption tool
        </p>{' '}
        <p>
          {' '}
          The first animal that gets admitted to our shelter is the first one
          that gets adopted.
        </p>
        <img
          alt='this is adoption'
          src='https://i.insider.com/51cd94f0eab8eaae1800001b'
        />
        <Link to='/adopt'>
          <button> Adopt Today! </button>
        </Link>
      </div>
    );
  }
}