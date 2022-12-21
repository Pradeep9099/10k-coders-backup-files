import React, { Component } from "react";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status:"",
        avgCPI: "",
        blog: ""
      },
      allStudents: [
        {
          university: "jntu",
          institute: "badruka",
          branch: "IT",
          degree: "UG",
          status:"completed",
          avgCPI: "7.6",
          blog: "www.jntu.com",
        },
      ],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var getStudents = { ...this.state.student };
    getStudents[e.target.name] = e.target.value;
    if(e.target.name == "status"){
      this.setState({status:e.target.value})
    }
    this.setState({ student: getStudents });
  };

  addStudent = ()=>{
    // console.log("add students ..")
    var getStudent = [ ...this.state.allStudents]
    getStudent.push(this.state.student)
    this.setState({allStudents:getStudent})
    this.clearForm()
  }
  clearForm = ()=>{
    var newStudents = {
      university: "",
        institute: "",
        branch: "",
        degree: "",
        status:"",
        avgCPI: "",
        blog: ""
    }
    this.setState({student:newStudents})
  }
  devareStudent = (std)=>{
    var delStudents = this.state.allStudents.filter((mystd)=> mystd.university !== std.university)
    this.setState({allStudents:delStudents})
  }
  editStudents = (std,i)=>{
    this.setState({student:std, editIndex:i})
  }

  updateStudent = ()=>{
    var latestStudents = [...this.state.allStudents]
    latestStudents[this.state.editIndex]= this.state.student
    this.setState({allStudents:latestStudents})
  }

  render() {
    return (
        <div className="container border border-2">
          <form>
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
              <input type="radio" name="status"  value="completed" onChange={(e)=>{this.handleChange(e)} } checked={this.state.student.status == "completed"} id="" /> completed <br />
              <input type="radio" name="status"  value="pursuing" onChange={(e)=>{this.handleChange(e)} } checked={this.state.student.status == "pursuing"} id="" /> pursuing  <br /> <br />

            <label htmlFor="">cpi : </label>
          <input type="text" name="avgCPI" id="" value={this.state.student.avgCPI} onChange={(e)=>{this.handleChange(e)}}/> <br /> <br />
           
              <label htmlFor="">blog : </label>
          <input type="text" name="blog" id="" value={this.state.student.blog} onChange={(e)=>{this.handleChange(e)}}/> <br /> <br />
          </form>
          {/* <button type="button" className="btn btn-primary mb-2" onClick={this.addStudent}>addStudent</button> */}

          {this.state.editIndex !== null ? (
            <button type="button" className="btn btn-primary " onClick={this.updateStudent}>updateStudent</button>
          ):(
            <button type="button" className="btn btn-primary " onClick={this.addStudent}>addStudent</button>
          )}


          <table className="table ">
              <thead >
                <tr>
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
                {this.state.allStudents.map((std,i)=>
                <tr key={i}>
                  <td>{std.university}</td>
                  <td>{std.institute}</td>
                  <td>{std.branch}</td>
                  <td>{std.degree}</td>
                  <td>{std.status}</td>
                  <td>{std.avgCPI}</td>
                  <td>{std.blog}</td>
                  <td><button type="button" className="btn btn-warning " onClick={()=>{this.editStudents(std,i)}}>edit</button></td>
                  <td><button type="button" className="btn btn-danger " onClick={()=>{this.devareStudent(std)}}>delete</button></td>

                </tr>)}
              </tbody>
          </table>
        </div>
     
    );
  }
}