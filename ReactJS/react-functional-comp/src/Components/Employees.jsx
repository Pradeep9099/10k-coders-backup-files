import React from "react";
import { useState } from "react";

const Employees = () => {
  const [emps, setEmps] = useState(["Ram", "Ravi", "Sam", "Sundar"]);

  const handleDelete = (emp) => {
    // let newEmployees = emps.filter((employ)=> employ !== emp);
    // setEmps(newEmployees)

    // let newEmployees = [...emps]
    // let filteredEmployees = newEmployees.filter((employee)=> employee !== emp);
    // setEmps(filteredEmployees)

    setEmps(emps.filter((employ) => employ !== emp));
    // let parentElent = e.target.parentNode
    // console.log(parentElent.innerText.substring(0,parentElent.innerText.length-1))
    // var empName = parentElent.innerText.substring(0,parentElent.innerText.length-1)
    // setEmps(emps.filter((employ)=> employ !== empName))
  };
  return (
    <div>
      <ul>
        {emps.map((emp, i) => (
          <li key={i} style={{ margin: 10 }}>
            {emp}
            <span
              style={{
                color: "red",
                border: "1px solid red",
                margin: 20,
                cursor: "pointer",
                borderRadius: "50%",
              }}
              //   onClick={(e)=>{handleDelete(e)}}
              onClick={() => {
                handleDelete(emp);
              }}
              // onClick={()=>{setEmps(emps.filter((employ)=> employ !== emp))}}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;