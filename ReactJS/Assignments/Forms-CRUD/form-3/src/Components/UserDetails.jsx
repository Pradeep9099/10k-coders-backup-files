import { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserDetails: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      UserInfo :[
        {
          name:"Ram",
          username:"RamKrishna",
          email:"ramkrishna@gmail.com",
          password:"123456",
          confirmpassword:"123456",
        }
      ], 
      editIndex:null,
    };
  }

  handleChange =(e)=>{
    // console.log(e.target.value);
    var newUserDetails = {...this.state.UserDetails};
    newUserDetails[e.target.name] = e.target.value;
    this.setState({UserDetails:newUserDetails})
  }
  addUser=()=>{
    var newDetails =[...this.state.UserInfo];
    newDetails.push(this.state.UserDetails);
    this.setState({UserInfos:newDetails})
    this.clearForm();
  };
  clearForm = () => {
    var presentDetails = {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    };
    this.setState({ UserDetails: presentDetails  });
  };

  editUser = (usr,i) => {
    // console.log(usr);
    this.setState({UserDetails:usr, editIndex:i});
  };

  deleteUser = (usr) => {
    // console.log(usr  )
    var latestDetails = this.state.UserInfo.filter(
      (myUsr) => myUsr.name !== usr.name
    );
    this.setState({ UserInfo: latestDetails });
  };

  updateUser=()=>{
    var freshDetails =[...this.state.UserInfo]
    freshDetails[this.state.editIndex] = this.state.UserDetails;
    this.setState({  UserInfo:freshDetails,editIndex : null});
    this.clearForm();
  }

  render() {
    return (
      <div>
        <form>
          <label> Name:</label><br />
          <input type="text" name="name" value={this.state.UserDetails.name} onChange={(e)=>this.handleChange(e)}/> <br /><br />
          <label> User Name :</label><br />
          <input type="text" name="username" value={this.state.UserDetails.username} onChange={(e)=>this.handleChange(e)}/> <br /><br />
          <label> email </label><br />
          <input type="text" name="email" value={this.state.UserDetails.email} onChange={(e)=>this.handleChange(e)}/> <br /><br />
          <label> Password</label><br />
          <input type="text" name="password" value={this.state.UserDetails.password} onChange={(e)=>this.handleChange(e)}/> <br /><br />
          <label> Confirm Password</label><br />
          <input type="text" name="confirmpassword" value={this.state.UserDetails.confirmpassword} onChange={(e)=>this.handleChange(e)}/> <br /><br />
         
          {this.state.editIndex !== null ?( <button
            type="button"
            className="btn btn-primary"
            onClick={this.updateUser}
          >
           Update User
          </button>) : (  <button type="button" className="btn btn-primary" onClick={this.addUser}> Add User Details</button>)}
                  
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Name </th>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.UserInfo.map((usr,i)=> (<tr  key={i}>
              <td>{usr.name}</td>
              <td>{usr.username}</td>
              <td>{usr.email}</td>
              <td>{usr.password}</td>
              <td>{usr.confirmpassword}</td>
              <td>
                <button type="button" className="btn btn-warning" onClick={() =>{this.editUser(usr,i)}} >
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() =>{this.deleteUser(usr);}}>
                    Delete
                  </button>
                </td>
            </tr>))}

          </tbody>
        </table>
      </div>
    );
  };
}
