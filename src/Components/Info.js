import React from 'react';
import PetContext from '../context/context';

class Info extends React.Component {
  static contextType = PetContext
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
        <button 
          type='button' 
          onClick={handleAdoptClick}
          disabled={!isFirstInLine}
          >
          Adopt
        </button>
      </div>
    )
  }
}

export default Info;