import { Component } from "react";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      showHeading: true,
      showImages: false,
      welcome: "Hello All .. Welcome to ReactJS Training ",
      studentDetails: {
        fname: "Ram",
        lname: "Kumar",
        email: "Ram@gmail.com",
      },
      subjects: ["HTML", "CSS", "Javascript", "AJAX", "ReactJS"],
      imges: [
        "https://cdn-icons-png.flaticon.com/512/888/888859.png",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        "https://www.computerhope.com/jargon/j/javascript.png",
        "https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg",
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.showHeading && <h2>{this.state.welcome}</h2>}
        <hr />
        <ul>
          {Object.values(this.state.studentDetails).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
        <hr />
        <ul>
          {this.state.subjects.map((val, i) => {
            return (
              <div key={i}>
                <h2>This is Subejct</h2>
                <li>{val}</li>
              </div>
            );
          })}
        </ul>
        {/* Ternory Operator  */}
        {/* {this.state.showImages && this.state.imges.map((imgVal,i)=> <img src={imgVal} alt="" key={i} style={{width:100,height:100}} /> )} */}
        {this.state.showImages ? (
          this.state.imges.map((imgVal, i) => (
            <img
              src={imgVal}
              alt=""
              key={i}
              style={{ width: 100, height: 100 }}
            />
          ))
        ) : (
          <p>Ther are No Images</p>
        )}
      </div>
    );
  }
}

export default Students;