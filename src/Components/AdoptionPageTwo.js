import React from "react";
import Queue from "../services/queue";
import DogService from "../services/dog-service";
import CatService from "../services/cat-service";
import PeopleService from "../services/people-service";
import PetContext from "../Context/context";
import Adopted from "./Adopted";
import Info from "./Info";
import PeopleInQueue from "./People";
import { Link } from 'react-router-dom';

class AdoptionPageTwo extends React.Component {
  static contextType = PetContext;

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  componentDidMount() {
    // console.log(this.context)
    this.context.clearError();
    this.context.clearQueue();
    this.context.clearCurrentCat();
    this.context.clearCurrentDog();

    //set interval line 22
    this.interval = setInterval( this.cycleList.bind(this), 5000)
    Promise.all([CatService.getCat(), DogService.getDog(), PeopleService.getPeople()])
      .then((res) => {
        this.context.setCurrentCat(res[0])
        this.context.setCurrentDog(res[1])
        let userQueue = new Queue()
        res[2].forEach(user => userQueue.enqueue(user))
        this.context.setQueue(userQueue)
      })
      .catch(e => console.error(e));
  }

  cycleList = () => {
    console.log(this.context.queue, "queue in context")
    console.log(this.context, "full context")

    if(this.context.userName !== this.context.queue.first.value){
      let coin = Math.floor(Math.random() * 100)
      if(coin < 50){
        this.handleAdoptCat()
      }
      else {
        this.handleAdoptDog()
      }
    }
  }


  

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderLine() {
    // console.log(this.context.queue.first.value)

    return (
      <PeopleInQueue
        first={this.context.queue.first.value}
        second={this.context.queue.first.next.value}
        third={this.context.queue.first.next.next.value}
        fourth={this.context.queue.first.next.next.next ? this.context.queue.first.next.next.next.value : " "}
        fifth={this.context.queue.first.next.next.next.next ? this.context.queue.first.next.next.next.next.value : " "}
      />
    );
  }

  renderCat() {
    return (
      <Info
        animal={this.context.currentCat}
        animalType={'cat'}
        handleAdoptClick={this.handleAdoptCat}
      />
    );
  }
  renderDog() {
    return (
      <Info
        animal={this.context.currentDog}
        animalType={'dog'}
        handleAdoptClick={this.handleAdoptDog}
      />
    );
  }

  handleAdoptCat = () =>  {
    this.setState({
      clicked: !this.state.clicked
    })
    return CatService.deleteCat()
      .then(res => {
        let owner = this.context.queue.requeue();
        res.owner = owner;
        this.context.setAdopted(res);
      })
      .then(res => {
        CatService.getCat().then(res => this.context.setCurrentCat(res));
        this.setState({ nowAdopting: this.context.queue.first.value });
      })   
  }

  handleAdoptDog = () =>  {
    this.setState({
      clicked: !this.state.clicked
    })
    return DogService.deleteDog()
      .then(res => {
        let owner = this.context.queue.requeue();
        res.owner = owner;
        this.context.setAdopted(res);
      })
      .then(res => {
        DogService.getDog().then(res => this.context.setCurrentDog(res));
        this.setState({ nowAdopting: this.context.queue.first.value });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.clearUserName();
    this.context.clearError();
    
    let name = document.getElementById('name').value;
    console.log(name)
    this.context.setUserName(name);

    return PeopleService.postPeople(name)
      .then(res => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/adopt1';
        history.push(destination);
      })
      .catch(error => console.log(error))
  }

  render() {
    const petAdopted = this.context.adopted.map((animal, index) =>
      <div className='adopted' key={index}>
        <Adopted
          imgSrc={animal.imageURL}
          name={animal.name}
          owner={animal.owner}
        />
      </div>
    );

    return (
      <div>
        <h1>
          Adopt a Dang Dog (or cat)!
        </h1>
        <form className='addName' onSubmit={this.handleSubmit} >
          <p>
            By adding your name to the queue you will be matched with an appropritate pet.
          </p>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
          <button type='submit'> Match Me!</button>
        </form>
        {this.context.queue ? this.renderLine() : 'Loading Pets! ...'}
        {this.state.clicked ? 'Congratulations On Adopting Your Pet!' : null}

        <div className='Pets-available'>
          <h2>Available Pets</h2>
          <div className='cat'>
            <h3>Cat</h3>
            {this.renderCat()}
          </div>
          <div className='dog'>
            <h3>Dog</h3>
            {this.renderDog()}
          </div>
        </div>
        <div className='Pets-adopted'>
          <h3>Adopted</h3>
          {petAdopted}
        </div>
      </div>
    );
  }


}
export default AdoptionPageTwo;