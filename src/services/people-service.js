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
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        person,
      }),
    }).then((res) => {
      console.log(res)
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      }
    );
  },
};

export default PeopleService;
