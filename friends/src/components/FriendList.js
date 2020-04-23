import React from "react";
import Loader from "react-loader-spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriendForm from "./NewFriend";

class FriendList extends React.Component {
  
    state = {
      friends: [],
      isLoading: false,
    };
  

  componentDidMount() {
    this.getData();
  }
  

  getData = () => {
    this.setState({
      isLoading: true,
    });
    axiosWithAuth()
      .get("/api/friends")
      .then((response) => {
        console.log({ response });
        this.setState({
          ...this.state.friends,
          friends: response.data,
          isLoading: false,
        });
      })
      .catch((error) => console.log({ error }));
  };

  render() {
    return (
      <div className="friendPage">
        <div className="friendList">
          {this.state.isLoading && (
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
          )}
          {this.state.friends.map((friend) => {
            //   console.log(friend);
            return (
              <div className="friendCard" key={friend.id}>
                <h3>{friend.name}</h3>
                <ul>
                  <li>Age: {friend.age}</li>
                  <li>Email: {friend.email}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <NewFriendForm
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default FriendList;
