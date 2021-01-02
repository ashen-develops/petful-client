import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PetContext from '../Context/context';
import PeopleService from '../services/people-service';

export default class Home extends Component {
  static contextType = PetContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.clearUserName();
    this.context.clearError();
    
    let name = document.getElementById('name').nodeValue;
    this.context.setUserName(name);

    return PeopleService.postPeople(name)
      .then(res => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/adopt';
        history.push(destination);
      })
  }

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
        <Link to='/adopt'>
          <button> Adopt Today! </button>
        </Link>

        <form className='addName' onSubmit={this.handleSubmit} >
          <h2>
            Adopt a Pet!
          </h2>
          <p>
            By adding your name to the queue you will be matched with an appropritate pet.
          </p>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
          <button type='submit'> Match Me!</button>
        </form>
      </div>
    );
  }
}