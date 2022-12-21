import axios from "axios";
import { Component } from "react";

export default class Form2 extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          userdetails: {
            id:"",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
          },
          allUsers:[],
          editIndex:null
        }       
    };

    handleChange=(e)=>{
      let newUser= {...this.state.userdetails}
      newUser[e.target.name]= e.target.value
      this.setState({userdetails:newUser})
      // console.log(e.target.value)
    };

    addUser =()=>{
      axios.post("http://localhost:3201/allUsers/",this.state.userdetails).then(()=>{
        this.getDataFromServer()
        this.clearForm()
      })
    };

    clearForm =()=>{
      let newForm ={
        id:"",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      }
      this.setState({userdetails:newForm})
    };
    
    editUser=(usr,i)=>{
      this.setState({userdetails:usr, editIndex:i})
    }

    deleteUser=(usr)=>{
        axios.delete("http://localhost:3201/allUsers/"+usr.id).then(()=>
        this.getDataFromServer()
        )
    };
    
    updateUser=()=>{
      axios.put(("http://localhost:3201/allUsers/"+this.state.userdetails.id),this.state.userdetails).then(()=>{
      this.setState({editIndex:null}) 
      this.getDataFromServer()
      this.clearForm()
      })
    }

    render (){
      return (
        <div className="container text-center">
          <h1> User Details</h1>
          <form>
          <label> ID </label>
            <input type="text" name="id"value={this.state.userdetails.id} onChange={(e)=>this.handleChange(e)} disabled/> <br/> <br/>
            <label> Name </label>
            <input type="text" name="name"value={this.state.userdetails.name} onChange={(e)=>this.handleChange(e)}/> <br/><br/>
            <label> User Name </label>
            <input type="text" name="username"value={this.state.userdetails.username} onChange={(e)=>this.handleChange(e)}/> <br/><br/>
            <label> Email </label>
            <input type="text" name="email"value={this.state.userdetails.email} onChange={(e)=>this.handleChange(e)}/> <br/><br/>
            <label> Password </label>
            <input type="text" name="password"value={this.state.userdetails.password} onChange={(e)=>this.handleChange(e)}/> <br/><br/>
            <label> Confirmpassword </label>
            <input type="text" name="confirmpassword"value={this.state.userdetails.confirmpassword} onChange={(e)=>this.handleChange(e)}/> <br/><br/>
                       
          </form>
          
          {this.state.editIndex !== null? ( <button type="button" onClick={this.updateUser} className="btn btn-primary"> Update User</button>):(<button type="button" onClick={this.addUser} className="btn btn-primary"> Add User</button>)}
          <br/>
          <table className="container">
            <thead>
              <tr>
                <th >ID</th>
                <th >Name</th>
                <th> User Name</th>
                <th> Email</th>
                <th> Password</th>
                <th> ConfirmPassword</th>
                <th>Edit</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {this.state.allUsers.map((usr,i)=>
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmpassword}</td>   
                <td>
                  <button type="button" className="btn btn-warning" onClick={()=>this.editUser(usr,i)}> Edit</button>
                </td>     
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>this.deleteUser(usr)}> Delete</button>
                </td>         
              </tr>)}

            </tbody>
          </table>
        </div>

      )
    }

    componentDidMount (){
      this.getDataFromServer()
    }
    getDataFromServer = async () => {
      let response = await axios.get("http://localhost:3201/allUsers/");
      this.setState({ allUsers: response.data });
      // console.log(response.data)
    };
  
}