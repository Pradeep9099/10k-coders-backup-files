import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const CreateUser = () => {
  const [user,setUser] = useState({email:"",password:"",fname:"",lname:""});
  const navigate = useNavigate();

  const handleChange = (e)=>{
    let newUser = {...user};
    newUser[e.target.name]=e.target.value;
    setUser(newUser)
  }
  const addUser = ()=>{
    console.log(user)
    fetch("http://localhost:3201/users",{
      method:"POST",
      body:JSON.stringify(user),
      headers:{'Content-Type':"application/json"}
    }).then(()=>{
      console.log("User Added")
      clearForm()
      navigate('/')
    })
  }
  const clearForm=()=>{
    setUser({email:"",password:"",fname:"",lname:""})
  }
  return (
    <div className="container">
      <UserForm handleChange={handleChange} user={user} handleSubmit={addUser} btnText="Create User"/>
    </div>
  );
};

export default CreateUser;