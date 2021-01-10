import config from "../config";

const PeopleService = {
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postPeople(person) {
    // console.log(person)
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: person,
      }),
    })
      .then((res) => {
        // console.log(res.json());
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      })
      .catch((error) => console.log(error));
  },
};

export default PeopleService;
