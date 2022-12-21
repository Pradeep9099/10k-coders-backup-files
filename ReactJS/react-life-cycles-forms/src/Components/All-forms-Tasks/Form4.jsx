import React, { Component } from "react";
import axios from "axios";

export default class Form4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        id: "",
        userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
      },
      allEmployees: [],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let getEmployee = { ...this.state.employee };
    getEmployee[e.target.name] = e.target.value;
    this.setState({ employee: getEmployee });
  };
  addEmployee =()=>{
    axios.post("http://localhost:3001/employee/",this.state.employee).then(()=>{
      this.getDatafromServer()
      this.clearForm()
    })
  }
  clearForm =()=>{
    let newForm ={
      id: "",
        userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
    }
    this.setState({employee:newForm})
  }

  deleteEmployee =(emp)=>{
    axios.delete("http://localhost:3001/employee/"+emp.id).then(()=>{
      this.getDatafromServer()
    })
  }

  editEmployee =(emp,i)=>{
    this.setState({employee:emp,editIndex:i})
  }

  updateEmployee =()=>{
    axios.put(("http://localhost:3001/employee/"+this.state.employee.id),this.state.employee).then(()=>{
      this.getDatafromServer()
      this.clearForm()
    })
  }

  

  render() {
    return (
      <>
        <form>
          <div className="container my-3 border border-3">
            <label htmlFor="">Id : </label>
            <input
              type="text"
              name="id"
              id=""
              value={this.state.employee.id}
              onChange={(e) => {
                this.handleChange(e);
              }}
              disabled
            />{" "}
            <br />
            <br />
            <label htmlFor="">username : </label>
            <input
              type="text"
              name="userName"
              id=""
              value={this.state.employee.userName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="">password : </label>
            <input
              type="text"
              name="password"
              id=""
              value={this.state.employee.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="">email : </label>
            <input
              type="text"
              name="email"
              id=""
              value={this.state.employee.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="gender">gender : </label>
            <select
              name="gender"
              id="gender"
              value={this.state.employee.gender}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">select</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="others">others</option>
            </select>
            <br />
            <br />
            <label htmlFor="">dateOfBirth : </label>
            <input
              type="date"
              name="dateOfBirth"
              id=""
              value={this.state.employee.dateOfBirth}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            {/* <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={this.addEmployee}
            >
              addEmployee
            </button> */}
          </div>
        </form>
        <div className="container">
        {this.state.editIndex !== null  ? (
             <button
             type="button"
             className="btn btn-primary mb-3"
             onClick={this.updateEmployee}
           >
             updateEmployee
           </button>
          ):(
            <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={this.addEmployee}
          >
            addEmployee
          </button>
          )}
        </div>

        <table className="table table-striped container">
            <thead>
              <tr>
                <td>Id</td>
                <td>userName</td>
                <td>password</td>
                <td>email</td>
                <td>gender</td>
                <td>dateOfBirth</td>
                <td>edit</td>
                <td>delete</td>
              </tr>
            </thead>
            <tbody>
              {this.state.allEmployees.map((emp, i) => (
                <tr key={i}>
                  <td>{emp.id}</td>
                  <td>{emp.userName}</td>
                  <td>{emp.password}</td>
                  <td>{emp.email}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.dateOfBirth}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        this.editEmployee(emp, i);
                      }}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteEmployee(emp);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </>
    );
  }

  componentDidMount() {
    this.getDatafromServer();
  }

  getDatafromServer = async () => {
    let response = await  axios.get("http://localhost:3001/employee/");
    this.setState({ allEmployees: response.data });
    console.log(response.data);
  };
}