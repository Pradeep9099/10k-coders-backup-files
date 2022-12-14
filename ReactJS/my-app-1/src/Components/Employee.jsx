import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employeeDetails: {
        empName: "Kiran",
        empEmail: "kiran@gmail.com",
        empRole: "Developer",
      },
      showEmployee: false,
    };
    // this.showEmployeeInformation= this.showEmployeeInformation.bind(this)
  }

  showEmployeeInformation = () => {
    console.log("showEmployeeInformation Called");
    // this.state.showEmployee = true
    // let newEmployee ={
    //     empName: "Sam",
    //     empEmail: "Sam@gmail.com",
    //     empRole: "Tester",
    // }
    let newEmployee = { ...this.state.employeeDetails, empRole: "Tester" };
    this.setState({ showEmployee: true, employeeDetails: newEmployee });
  };
  // showEmployeeInformation(){
  //     console.log("showEmployeeInformation Called")
  // }
  render() {
    return (
      <div>
        <h2>Welcome to Employee Component</h2>
        <button onClick={this.showEmployeeInformation}>
          Show Employee Details
        </button>
        {/* {this.state.showEmployee && <p>{this.state.employeeDetails.empName}</p> } */}
        {this.state.showEmployee ? (
          <div>
            <p>{this.state.employeeDetails.empName}</p>
            <p>{this.state.employeeDetails.empEmail}</p>
            <p>{this.state.employeeDetails.empRole}</p>
          </div>
        ) : (
          <p>Empployee Details Not Availble ....</p>
        )}
      </div>
    );
  }
}

export default Employee;