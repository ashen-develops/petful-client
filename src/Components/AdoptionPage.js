import React from "react";
import Queue from "../services/queue"
import DogService from "../services/dog-service";
import CatService from "../services/cat-service"
import PeopleService from "../services/people-service";
import PetContext from "../Context/context"
import Adopted from "./Adopted";
import Info from "./Info";
import People from "./People";

class Adopt extends React.Component {
  static contextType = PetContext

  componentDidMount() {
    this.context.clearCurrentCat();
    this.context.clearCurrentDog();
    this.context.clearQueue();
    this.context.clearError();

    this.interval = setInterval( this.cycleList.bind(this), 15000)
    Promise.all([CatService.getCat(), DogService.getDog(), PeopleService.getPeople()])
      .then((res) => {
        this.context.setCurrentCat(res[0])
        this.context.setCurrentdog(res[1])
        let personQueue = new Queue()
        res[2].forEach(person => personQueue.enqueue(person))
        this.context.setQueue(personQueue)
      })
      .catch(e => console.error(e));
  }

  handleAdoptDog = () => {
    return DogService.deleteDog()
      .then(res => {
        let owner = this.context.queue.requeue();
        res.owner = owner;
        this.context.setAdopted(res);
      })
      .then(res => {
        DogService.getDog().then(res => this.context.setDog(res));
      })
  }

  handleAdoptCat = () => {
    return DogService.deleteCat()
      .then(res => {
        let owner = this.context.queue.requeue();
        res.owner = owner;
        this.context.setAdopted(res);
      })
      .then(res => {
        DogService.getCat().then(res => this.context.setCat(res));
      })
  }

  cycleList = () => {
    if(this.context.userName !== this.context.queue.first.value) {
      let c = Math.floor(Math.random() * 100)
      if(c < 50) {
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

  renderPeople() {
    return (
      <People
        first={this.context.queue.first.value}
        second={this.context.queue.first.next.value}
        third={this.context.queue.first.next.value}
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
        animalType={'cat'}
        handleAdoptClick={this.handleAdoptDog}
      />
    );
  }

  render() {
    const petAdopted = this.context.adopted.map((animal, index) =>
      <div className='adopted' key={index}>
        <Adopted
          imgSrc={animal.imageURL}
          name={animal.name}
          owner={animal.owner}
        />

      </div>)
    return (
      <div>
          <h1>Let's See Who Is In Line?</h1>
          {this.context.queue ? this.renderPeople() : "Loading..."}
          <h2>Cats</h2>
          {this.renderCat()}
        <h2>Dogs</h2>
          {this.renderDog()}
        <form onSubmit={this.onSubmit}>
          <h1>Get in Line!</h1>
          <div className="landing-content">
            <label className="full-name" htmlFor="full-name">
              Enter Your Name
            </label>
            <br />
            <input
              onChange={(event) =>
                this.setState({ fullName: event.currentTarget.value })
              }
              type="text"
              id="full-name"
            />
            <br />
            <br />
            <button>Join Our Queue</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Adopt;
