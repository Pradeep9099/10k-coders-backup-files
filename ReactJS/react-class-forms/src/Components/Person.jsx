import { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fname: "",
        lname: "",
        email: "",
      },
      allUsers: [
        {
          fname: "Ram",
          lname: "Krishna",
          email: "ramkrishna@gmail.com",
        },
        {
          fname: "sam",
          lname: "sunder",
          email: "samsunder@gmail.com",
        },
        {
          fname: "suresh",
          lname: "Krishna",
          email: "sureshkrishna@gmail.com",
        },
      ],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    var newPerson = { ...this.state.person };
    newPerson[e.target.name] = e.target.value;
    this.setState({ person: newPerson });
    // console.log(newPerson)
  };

  addUser = () => {
    // console.log(this.state.person);
    var newallUsers = [...this.state.allUsers];
    newallUsers.push(this.state.person);
    this.setState({ allUsers: newallUsers });
    this.clearForm();
  };

  clearForm = () => {
    var newForm = {
      fname: "",
      lname: "",
      email: "",
    };
    this.setState({ person: newForm });
  };

  editUser = (usr, i) => {
    // console.log(usr);
    this.setState({ person: usr, editIndex: i });
  };

  deleteUser = (usr) => {
    console.log(usr);
    var latestUsers = this.state.allUsers.filter(
      (myUser) => myUser.email !== usr.email
    );
    this.setState({ allUsers: latestUsers });
  };

  updateUser = (usr) => {
    var latestUsers= [...this.state.allUsers];
    latestUsers [this.state.editIndex] = this.state.person;
    this.setState({allUsers:latestUsers, editIndex:null})
    this.clearForm()
  };

  render() {
    return (
      <div>
        <form>
          <label> First Name :</label>
          <input
            type="text"
            name="fname"
            value={this.state.person.fname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label> Last Name :</label>
          <input
            type="text"
            name="lname"
            value={this.state.person.lname}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label> Email :</label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          {this.state.editIndex !== null ? (
            <button type="button" onClick={this.updateUser}  className="btn btn-primary">
              Update User
            </button>
          ) : (
            <button
              type="button"
              onClick={this.addUser}
              className="btn btn-primary"
            >
              Add User
            </button>
          )}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    EDIT
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteUser(usr);
                    }}
                  >
                    {" "}
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
