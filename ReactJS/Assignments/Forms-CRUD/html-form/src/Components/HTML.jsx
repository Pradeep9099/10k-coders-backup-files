import { Component } from "react";

export default class HTML extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personinfo: {
        fname: "",
        lname: "",
        dob: "",
        email: "",
        mobile: "",
      },
      allUsers: [
        {
          fname: "Ram",
          lname: "Krishna",
          dob: "12-11-1987",
          email: "ramkrishna@gmail.com",
          mobile: "9949557542",
        },
        {
          fname: "sam",
          lname: "sunder",
          dob: "10-11-1990",
          email: "samsunder@gmail.com",
          mobile: "9988457542",
        },
        {
          fname: "suresh",
          lname: "Krishna",
          dob: "21-11-1992",
          email: "sureshkrishna@gmail.com",
          mobile: "9000589066",
        },
      ],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    // console.log(newpersoninfo);
    var newpersoninfo = { ...this.state.personinfo };
    newpersoninfo[e.target.name] = e.target.value;
    this.setState({ personinfo: newpersoninfo });
  };

  addUser = () => {
    var newallUsers = [...this.state.allUsers];
    newallUsers.push(this.state.personinfo);
    this.setState({ allUsers: newallUsers });
    this.clearForm();
  };

  clearForm = () => {
    var newForm = {
      fname: "",
      lname: "",
      dob: "",
      email: "",
      mobile: "",
    };
    this.setState({ personinfo: newForm });
  };
  updateUser = () => {
    var newallUsers = [...this.state.allUsers];
    newallUsers[this.state.editIndex] = this.state.personinfo;
    this.setState({ allUsers: newallUsers, editIndex:null});
    this.clearForm();
  };

  editUser = (usr, i) => {
    this.setState({ personinfo: usr, editIndex: i });
  };

  deleteUser = (usr) => {
    console.log(usr);
    var latestUser = this.state.allUsers.filter(
      (myUser) => myUser.email !== usr.email
    );
    this.setState({ allUsers: latestUser });
  };

  render() {
    return (
      <div>
        <form>
          <label> First Name :</label>
          <input
            type="text"
            name="fname"
            value={this.state.personinfo.fname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label> Last Name :</label>

          <input
            type="text"
            name="lname"
            value={this.state.personinfo.lname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label> Date Of Birth :</label>
          <input
            type="date"
            name="dob"
            value={this.state.personinfo.dob}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label> Email :</label>

          <input
            type="text"
            name="email"
            value={this.state.personinfo.email}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label> Mobile Number :</label>
          <input
            type="number"
            name="mobile"
            value={this.state.personinfo.mobile}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              onClick={this.updateUser}
              className="btn btn-primary"
            >
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
        <hr></hr>

        <table className="table">
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name </th>
              <th>Date Of Birth </th>
              <th>Email </th>
              <th>Mobile Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.dob}</td>
                <td>{usr.email}</td>
                <td>{usr.mobile}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    {" "}
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
