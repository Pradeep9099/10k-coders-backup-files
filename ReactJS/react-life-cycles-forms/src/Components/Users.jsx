import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        email: "",
        password: "",
      },
      users: [],
    };
  }
  handleChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };

  handleSubmit = () => {
    console.log(this.state.user)
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="email"
              className="form-control"
              name="fname"
              value={this.state.user.fname}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.user.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.user.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
        {/* <ul>
          {this.state.users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  async componentDidMount() {
    // fetch("http://localhost:3201/users").then(res=>{
    //    return res.json()
    // }).then((response)=>{
    //     console.log(response)
    // })
    let data = await (await fetch("http://localhost:3201/users")).json();
    this.setState({ users: data });
    console.log(data);
  }
}