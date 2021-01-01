import React from 'react';

const PetContext = React.createContext({
    setPeople: () => { },
    clearPeople: () => { },
    setUserName: () => { },
    clearUserName: () => { },

    setQueue: () => { },
    clearQueue: () => { },
    setError: () => { },
    clearError: () => { },

    setCat: () => { },
    clearCat: () => { },
    setDog: () => { },
    clearDog: () => { },
    setAdopted: () => { },
    clearAdopted: () => { },
    randomPet: () => { },

    cycle: () => { },

    currentCat: {},
    currentDog: {},
    adopted: [],
    people: [],
    queue: null,
    fullName: "",
    currentUser: "",
    isHidden: true,
    error: null,
})

export default PetContext;

//create context provider here
class PetContextProvider extends React.Component {
    state = {
        currentCat: {},
        currentDog: {},
        adopted: [],
        people: [],
        queue: null,
        fullName: "",
        currentUser: "",
        isHidden: true,
        error: null,
    };

    //use empty arrow functions to fill state for provider
    setPeople = (people) => {
        this.setState({ people })
     }
    clearPeople = () => { 
        this.setState({ people: [] })
    }
    setUserName = (currentUser) => {
        this.setState({ currentUser })
     }
    clearUserName = () => {
        this.setState({ currentUser: "" })
     }

    setQueue = (queue) => {
        this.setState({ queue })
     }
    clearQueue = () => {
        this.setState({ queue: null })
     }
    setError = (error) => {
        this.setState({ error })
     }
    clearError = () => {
        this.setState({ error: null })
     }

    setCat = (currentCat) => {
        this.setState({ currentCat })
     }
    clearCat = () => {
        this.setState({ currentCat: {} })
     }
    setDog = (currentDog) => {
        this.setState({ currentDog })
     }
    clearDog = () => {
        this.setState({ currentDog: {} })
     }
    setAdopted = (adopted) => {
        this.setState({ adopted: [...this.state.adopted, adopted] })
     }
    clearAdopted = () => {
        this.setState({ adopted: [] })
     }
    // randomPet = () => {
    //     let c = Math.floor(Math.random() * 100)
    //     if(c < 50) {
    //         this.handle
    //     }
    //  }

    // cycle = () => {
    //     if (this.context.currentUser !== this.context.queue.first.value) {
    //         setTimeout(function () {
    //             this.randomPet();
    //         }, 10000);
    //     }
    //  }

    render() {

      const value = {
          currentCat: this.state.currentCat,
          currentDog: this.state.currentDog,
          adopted: this.state.adopted,
          people: this.state.people,
          queue: this.state.queue,
          fullName: this.state.fullName,
          currentUser: this.state.currentUser,
          isHidden: this.state.isHidden,
          error: this.state.error,
          setPeople: this.setPeople,
          clearPeople: this.clearPeople,
          setUserName: this.setUserName,
          clearUserName: this.clearUserName,
          setQueue: this.setQueue,
          clearQueue: this.clearQueue,
          setError: this.setError,
          clearError: this.clearError,
          setCat: this.setCat,
          clearCat: this.clearCat,
          setDog: this.setDog,
          clearDog: this.clearDog,
          setAdopted: this.setAdopted,
          clearAdopted: this.clearAdopted,
          
      }
        return (
            <PetContext.Provider value={ value }>
                { this.props.children }
            </PetContext.Provider>
        );
    }
}