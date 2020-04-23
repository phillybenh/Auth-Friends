import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    isLoading: false,
  };

  // handle form data
  handleChange = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  //handle login/submit action
  login = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: false,
    });
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", JSON.stringify(response.data.payload));
        this.props.history.push("/friends");
        this.setState({
            isLoading: false
        })
      })
      .catch((error) => {
        console.log({ error });
        alert(`${error.response.data.error}`);
      });
  };

  render() {
    return (
      <div className="loginForm">
        <h2>Please log in:</h2>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.state.isLoading && (
              <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            )}
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

/**
 * import Loader from "react-loader-spinner";
 * {props.isFetching && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
 */
