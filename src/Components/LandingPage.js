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
          src='https://www.humanesocietymiami.org/wp-content/uploads/2020/04/Adopt-a-shelter-pet-today_dog-2000px.jpg'
        />
        <Link to='/cat-adopt'>
          <button> View Cats </button>
        </Link>
        <Link to='/dog-adopt'>
          <button> View Dogs </button>
        </Link>
      </div>
    );
  }
}