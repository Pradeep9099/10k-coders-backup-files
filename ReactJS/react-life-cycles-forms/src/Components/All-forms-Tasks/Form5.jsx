import React, { Component } from "react";
import axios from "axios";

export default class Form5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        id: "",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        avgCPI: "",
        blog: "",
      },
      allStudents: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    let getStudents = { ...this.state.student };
    getStudents[e.target.name] = e.target.value;
    if (e.target.name === "status") {
      this.setState({ status: e.target.value });
    }
    this.setState({ student: getStudents });
  };

  addStudent = ()=>{
    axios.post("http://localhost:3001/students/",this.state.student).then(()=>{
      this.getDataFromServer()
      this.clearForm()
    })
  }
  clearForm =()=>{
    let newForm ={
      id: "",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        avgCPI: "",
        blog: "",
    }
    this.setState({student:newForm})
  }
  deleteStudent = (std)=>{
    axios.delete("http://localhost:3001/students/"+std.id).then(()=>{
      this.getDataFromServer()
    })
  }
  editStudents =(std,i)=>{
    this.setState({student:std,editIndex:i})
  }

  updateStudent =()=>{
    axios.put(("http://localhost:3001/students/"+this.state.student.id),this.state.student).then(()=>{
      this.getDataFromServer()
      this.clearForm()
    })
  }

  render() {
    return (
      <>
        <div className="container border border-2 my-3">
          <form>
            <label htmlFor="">Id : </label>
            <input
              type="text"
              name="id"
              id=""
              value={this.state.student.id}
              onChange={(e) => {
                this.handleChange(e);
              }}
              className="my-3"
              disabled
            />{" "}
            <br /> <br />
            <label htmlFor="">university : </label>
            <input
              type="text"
              name="university"
              id=""
              value={this.state.student.university}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">institute : </label>
            <input
              type="text"
              name="institute"
              id=""
              value={this.state.student.institute}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">branch : </label>
            <select
              name="branch"
              id=""
              value={this.state.student.branch}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">select</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="ME">ME</option>
            </select>
            <br /> <br />
            <label htmlFor="">degree</label>
            <select
              name="degree"
              id=""
              value={this.state.student.degree}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">select</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
            <br /> <br />
            <label htmlFor="">status :</label>
            <br />
            <input
              type="radio"
              name="status"
              value="completed"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.student.status === "completed"}
              id=""
            />{" "}
            completed <br />
            <input
              type="radio"
              name="status"
              value="pursuing"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.student.status === "pursuing"}
              id=""
            />{" "}
            pursuing <br /> <br />
            <label htmlFor="">cpi : </label>
            <input
              type="text"
              name="avgCPI"
              id=""
              value={this.state.student.avgCPI}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">blog : </label>
            <input
              type="text"
              name="blog"
              id=""
              value={this.state.student.blog}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            {/* <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.addStudent}
            >
              addStudent
            </button> */}
          </form>

          {this.state.editIndex !== null ? (
            <button type="button" className="btn btn-primary mb-2" onClick={this.updateStudent}>updateStudent</button>
          ):(
            <button type="button" className="btn btn-primary mb-2" onClick={this.addStudent}>addStudent</button>
          )}

          <table className="table table-striped">
            <thead className=" bg-secondary text-warning">
              <tr>
                <th>id</th>
                <th>university</th>
                <th>institute</th>
                <th>branch</th>
                <th>degree</th>
                <th>status</th>
                <th>avgCPI</th>
                <th>blog</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allStudents.map((std, i) => (
                <tr key={i}>
                  <td>{std.id}</td>
                  <td>{std.university}</td>
                  <td>{std.institute}</td>
                  <td>{std.branch}</td>
                  <td>{std.degree}</td>
                  <td>{std.status}</td>
                  <td>{std.avgCPI}</td>
                  <td>{std.blog}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning "
                      onClick={() => {
                        this.editStudents(std, i);
                      }}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger "
                      onClick={() => {
                        this.deleteStudent(std);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.getDataFromServer();
  }

  getDataFromServer = async () => {
    let response = await axios.get("http://localhost:3001/students/");
    this.setState({ allStudents: response.data });
    console.log(response.data);
  };
}