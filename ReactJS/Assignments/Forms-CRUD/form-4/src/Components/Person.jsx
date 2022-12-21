import { Component } from "react";

export default class Person extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         Person:{
            username:"",
            password:"",
            email:"",
            dateofbirth:"",
            height:"",
         },
         persondata:[
            {
            username:"Pradeep",
            password:"123456",
            email:"123456",
            dateofbirth:"11-11-1990",
            height:"5.7",
            }
         ],
         editIndex:null
      };
    };

    handleChange=(e)=>{
        var newPerson = {...this.state.Person};
        newPerson[e.target.name] = e.target.value;
        this.setState({Person:newPerson});
    };

    addUser =()=>{
        var newData = [...this.state.persondata];
        newData.push(this.state.Person)
        this.setState({persondata:newData})
        this.clearForm()
    };
    clearForm =()=> {
        var newForm ={
            username:"",
            password:"",
            email:"",
            dateofbirth:"",
            height:"",            
        }
        this.setState({Person:newForm})
    } ;

    deleteUser =(data)=>{
        var DataInfo = this.state.persondata.filter ((myData)=>myData.email !== data.email)
        this.setState({persondata : DataInfo});
    };

    editUser =(data, i)=>{
        this.setState({Person:data, editIndex:i})
    };
    updateUser=()=>{
        var latestData= [...this.state.persondata]
        latestData[this.state.editIndex]= this.state.Person;
        this.setState({persondata:latestData, editIndex:null });
        this.clearForm()
    };

    render(){
        return(
            <div>
                <form>
                    <label> UserName </label>
                    <input type="text" name="username" value={this.state.Person.username} onChange={(e)=>{this.handleChange(e)}}/> <br/>
                    <label> Password </label>
                    <input type="text" name="password" value={this.state.Person.password} onChange={(e)=>{this.handleChange(e)}}/><br/>
                    <label> Email </label>
                    <input type="text" name="email"value={this.state.Person.email} onChange={(e)=>{this.handleChange(e)}}/> <br/>
                    <label> Date Of Birth </label>
                    <input type="date" name="dateofbirth" value={this.state.Person.dateofbirth} onChange={(e)=>{this.handleChange(e)}}/> <br/>
                    <label> Height </label>
                    <input type="text" name="height" value={this.state.Person.height} onChange={(e)=>{this.handleChange(e)}}/> <br/>
                    {this.state.editIndex !==null ?(<button type="button" onClick={this.updateUser} className="btn btn-primary"> Update User </button>) :(<button type="button" onClick={this.addUser} className="btn btn-primary"> Add User </button>) }    
                    
                    
 
                </form>
                <table className="table">
                    <thead>
                        <tr>
                        <th> User Name</th>
                        <th> Paasword</th>
                        <th> Email</th>
                        <th> Date Of Birth</th>
                        <th> Height</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persondata.map((data, i) => (
                        <tr key={i}>
                            <td>{data.username}</td>
                            <td>{data.password}</td>
                            <td>{data.email}</td>
                            <td>{data.dateofbirth}</td>
                            <td>{data.height}</td>
                            <td>
                            {" "}
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => {
                                this.editUser(data,i);
                                }}
                            >
                                Edit
                            </button>
                            </td>
                            <td>
                            {" "}
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                this.deleteUser(data);
                                }}
                            >
                                Delete
                            </button>{" "}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        )
    }
    
}