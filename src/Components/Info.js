import React from 'react';
import AppContext from '../Context/context';
import { Link } from 'react-router-dom';

class Info extends React.Component {
  static contextType = AppContext
  render() {

    const {animal, handleAdoptClick} = this.props
    let isFirstInLine = false
    if(this.context.queue) {
      isFirstInLine = (this.context.userName === this.context.queue.first.value)
    }
    return (
      <div className='PetInfo'>
        <img src={animal.imageURL} alt={animal.imageDescription} />
        <h3>Name: {animal.name}</h3>
        <p>{animal.story}</p>
        <ul>
          <li>Gender: {animal.gender}</li>
          <li>Age: {animal.age}</li>
          <li>Breed: {animal.breed}</li>
          <li>Description: {animal.description}</li>
        </ul>
        <Link to='/congrats'>
        <button 
          type='button' 
          onClick={handleAdoptClick}
          disabled={!isFirstInLine}
          >
          Adopt
        </button></Link>
      </div>
    )
  }
}

export default Info;