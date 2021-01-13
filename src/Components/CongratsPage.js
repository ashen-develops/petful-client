import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Congrats extends Component {

  render() {
    return (
      <div className='congrats'>
          <h1>Congratulations on adopting your new pet!</h1>
          <Link to='/'>Take Me Home</Link>
      </div>
    );
  }
}

export default Congrats;