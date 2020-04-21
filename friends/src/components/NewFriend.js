import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriend = (props) => {
    console.log(props)
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });
 
 // handle form data
  const inputChange = (event) => {
      event.preventDefault();
      const newFormData = {
        ...newFriend,
        [event.target.name]: event.target.value,
      };
    setNewFriend(newFormData)
    };
  

  const friendSubmit = (event) => {
      axiosWithAuth()
        .post("/api/friends", newFriend)
        .then( response => {
            console.log({response})
        })
        .catch( error => {
            console.log({error})
        });
  };

  return (
    <div className="newFriend">
      <p>newFriend</p>
    </div>
  );
  };

export default NewFriend;
