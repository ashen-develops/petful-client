import React, { Component } from "react";
import config from "../config";
import PetService from "../services/pets-service";
import PeopleService from "../services/person-service";
import "../styles/Adopt.css";

export class Adopt extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      people: [],
      pets: {},
      OK: false,
      fullName: "",
      currentUser: "",
      isHidden: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    PetService.getAllPets().then((pets) => {
      this.setState({
        cats: pets.cat,
        dogs: pets.dog,
      });
    });
    PeopleService.getAllPeople()
      .then((people) => {
        console.log(people, "people array");
        this.setState({ people });
      })
      .catch((e) => console.error(e));
  };
  // }

  petCountdown = () => {
    let countdown = setInterval(() => {
      console.log(this.state);
      if (this.state.people.length < 2) {
        this.addToQueue();
        this.setState({
          isHidden: false,
        });
        return clearInterval(countdown);
      }
      fetch(`${config.API_BASE_URL}/pets`, {
        method: "DELETE",
        header: {
          "content-type": "application/json",
        },
      }).then(() => this.fetchData());
      this.adopted();
    }, 4000);
  };

  addToQueue = () => {
    let peopleNames = [
      "Rachel",
      "Larry Horan",
      "Niall",
      "Tanner Fue",
      "Lacy Green",
      "Ethan",
    ];

    let addPeople = setInterval(() => {
      if (this.state.people.length > 4) {
        return clearInterval(addPeople);
      }

      let index = Math.floor(Math.random() * peopleNames.length);
      let person = peopleNames[index];

      fetch(`${config.API_BASE_URL}/people`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ person }),
      })
        .then((res) => res.json())
        .then(() => this.fetchData());
    }, 4000);
  };

  adopted = (petId = null) => {
    let counter = petId ? petId : this.state.people.length;
    if (counter === 0) {
      return;
    }
    if (counter % 2 === 0) {
      fetch(`${config.API_BASE_URL}/pets`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ type: "cats" }),
      }).then(() => this.fetchData());
    } else {
      fetch(`${config.API_BASE_URL}/pets`, {
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
    fetch(`${config.API_BASE_URL}/people`, {
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
    fetch(`${config.API_BASE_URL}/pets`, {
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
