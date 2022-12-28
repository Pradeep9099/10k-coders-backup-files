import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await (await fetch("http://localhost:3201/users")).json();
    setUsers(response);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {users.map((person,i)=> <User usr={person} key={i}/> )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;