
// import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// function NewFriendForm(props) {
//   const [newFriend, setNewFriend] = useState({
//     name: "",
//     age: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     e.preventDefault();
//     setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
//   };
//   const addNewFriend = (e) => {
//     axiosWithAuth()
//       .post("/api/friends", newFriend)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="addFriend">
//       <h3>Lets Be Friends...</h3>
//       <h6>And, yes your age is important to me... </h6>
//       <h6>its more than a number</h6>
//       <p>**ALL FIELDS REQUIRED</p>
//       <form className="addFriend" onSubmit={addNewFriend}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="name"
//           value={newFriend.name}
//           onChange={handleChange}
//         />
//         <label htmlFor="age">Age:</label>
//         <input
//           type="text"
//           id="age"
//           name="age"
//           placeholder="age"
//           value={newFriend.age}
//           onChange={handleChange}
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="email"
//           value={newFriend.email}
//           onChange={handleChange}
//         />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

// export default NewFriendForm;




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
    //   event.preventDefault();
    axiosWithAuth()
      .post('/api/friends', newFriend)
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
