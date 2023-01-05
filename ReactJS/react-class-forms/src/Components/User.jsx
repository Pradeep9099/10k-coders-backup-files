import { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
    };
  }
  handleChange(e) {
    // console.log(e.target.name);

    // console.log(e.target.value);
    // this.setState({fname:e.target.value});
    var newObject = { ...this.state }
    newObject[e.target.name] = e.target.value
    this.setState(newObject)

  }

  addUser = () => {
    console.log(this.state)
  }
  editUser = () => {
    var newUser = {
      fname: "Pradeep",
      lname: "Kumar",
      email: "pradeepkumarpudari@gmail.com",
    };
    this.setState(newUser)
  }
  render() {
    return (
      <div>
        <form>
          <label> First Name :</label>
          <input type="text" name="fname" value={this.state.fname} onChange={(e) => this.handleChange(e)} /><br />
          <label> Last Name :</label>
          <input type="text" name="lname" value={this.state.lname} onChange={(e) => this.handleChange(e)} /> <br />
          <label> Email :</label>
          <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} /> <br />
          <button type="button" onClick={this.addUser}> Add User</button>
          <button type="button" onClick={this.editUser}>Edit User</button>
        </form>
      </div>
    );
  }
}

export default User;
