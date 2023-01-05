import { useState } from "react";

export const Person = () => {
  // Usestate will give an Array
  // We are going destructue the Array
  const [person, setPerson] = useState({
    fname: "Murali",
    lname: "Krishna",
    email: "murali@gmail.com",
  });

  const changePersonDetails = () => {
    let newPerson = {...person};
    newPerson['lname'] = "Naveen";
    setPerson(newPerson);
    // setPerson({...person,lname:"Ram Charan"})
  };

  return (
    <div>
      <h2>Hello From Person Component !!</h2>
      <button onClick={changePersonDetails}>Change Person</button>
      <ul>
        <li>{person.fname}</li>
        <li>{person.lname}</li>
        <li>{person.email}</li>
      </ul>
    </div>
  );
};