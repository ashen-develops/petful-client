import React from "react";
import config from "../config";
import Queue from "../services/queue"
import DogService from "../services/dog-service";
import CatService from "../services/cat-service"
import PeopleService from "../services/people-service";
import PetContext from "../Context/context"

export class Adopt extends React.Component {
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

  // petCountdown = () => {
  //   let countdown = setInterval(() => {
  //     console.log(this.state);
  //     if (this.state.people.length < 2) {
  //       this.addToQueue();
  //       this.setState({
  //         isHidden: false,
  //       });
  //       return clearInterval(countdown);
  //     }
  //     fetch(`${config.API_ENDPOINT}/pets`, {
  //       method: "DELETE",
  //       header: {
  //         "content-type": "application/json",
  //       },
  //     }).then(() => this.fetchData());
  //     this.adopted();
  //   }, 4000);
  // };

  // addToQueue = () => {
  //   let peopleNames = [
  //     "Oneiam",
  //     "Twosonn",
  //     "Thrite",
  //     "Fourile",
  //   ];
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

  adopted = (petId = null) => {
    let counter = petId ? petId : this.state.people.length;
    if (counter === 0) {
      return;
    }
    if (counter % 2 === 0) {
      fetch(`${config.API_ENDPOINT}/pets`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ type: "cats" }),
      }).then(() => this.fetchData());
    } else {
      fetch(`${config.API_ENDPOINT}/pets`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ type: "dogs" }),
      }).then(() => this.fetchData());
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    let person = this.state.fullName;
    this.setState({ currentUser: person });
    fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ person }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          people: [...this.state.people, resJson],
        });
        console.log(this.state.people.length);
      })
      .then(() => this.fetchData());
    this.petCountdown();
  };

  handleAdoptClick = (event) => {
    event.preventDefault();
    fetch(`${config.API_ENDPOINT}/pets`, {
      method: "DELETE",
      header: {
        "content-type": "application/json",
      },
    }).then(() => this.fetchData());
    this.adopted(event.target.value);
    alert("You adopted a pet!");
    this.setState({
      isHidden: true,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let hiddenClass = this.state.isHidden ? "hiddenClass" : "";
    let cats = this.state.cats ? this.state.cats : [];
    let catCard = cats.map((cat, i) => {
      return (
        <div key={i} className="landing-content">
          <img src={cat.imageURL} alt="Landing Cat" />
          <h2>Name: {cat.name}</h2>
          <p>Gender: {cat.gender}</p>
          <p>Age: {cat.age}</p>
          <p>Breed: {cat.breed}</p>
        </div>
      );
    });
    let dogs = this.state.dogs ? this.state.dogs : [];

    let dogCard = dogs.map((dog, i) => {
      return (
        <div key={i} className="landing-content">
          <img src={dog.imageURL} alt="Landing Dog" />
          <h2>Name: {dog.name}</h2>
          <p>Gender: {dog.gender}</p>
          <p>Age: {dog.age}</p>
          <p>Breed: {dog.breed}</p>
        </div>
      );
    });

    let people = this.state.people ? this.state.people : [];

    let nextInLine = people.map((people, i) => {
      return (
        <div key={i}>
          <li className="people-list">{people}</li>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h2>Let's See Who Is In Line?</h2>
          <h2>Cats</h2>
          <button
            className={`adoptCat-button ${hiddenClass}`}
            onClick={this.handleAdoptClick}
            value="2"
          >
            Adopt Cat!{" "}
          </button>
          {catCard}
        </div>
        <h2>Dogs</h2>
        <button
          className={`adoptDog-button ${hiddenClass}`}
          onClick={this.handleAdoptClick}
          value="1"
        >
          Adopt Dog!{" "}
        </button>
        {dogCard}
        <section>
          <h2>See Who Else Is In Line To Adopt! </h2>
          <ul className="next">{nextInLine}</ul>
        </section>
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
