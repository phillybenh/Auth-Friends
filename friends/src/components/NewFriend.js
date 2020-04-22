
import React, { useState } from "react";


import { axiosWithAuth } from "../utils/axiosWithAuth";

function NewFriendForm(props) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });



  // handle form data
  const inputChange = (event) => {
    event.preventDefault();
    setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  const friendSubmit = (event) => {
      // event.preventDefault();
    axiosWithAuth()
      .post(
        "/api/friends",
        newFriend,
      )
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className="newFriend">
      <h2>Enter a New Friend:</h2>
      <form onSubmit={friendSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          value={newFriend.name}
          onChange={inputChange}
        />
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="text"
          name="age"
          value={newFriend.age}
          onChange={inputChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          value={newFriend.email}
          onChange={inputChange}
        />

        <button>Submit Friend</button>
      </form>
    </div>
  );
}

export default NewFriendForm;
