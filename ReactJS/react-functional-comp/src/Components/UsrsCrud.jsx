import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const UsrsCrud = () => {
  const [age, setAge] = useState(25);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  // useEffect is Equal to Component Did Mount
  useEffect(() => {
    getAllUsers();
  }, []);
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleSubmit = () => {
    axios.post("http://localhost:3202/students", user).then(() => {
      getAllUsers();
      clearForm()
    });
  };
  const getAllUsers = () => {
    axios.get("http://localhost:3202/students").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };
  const editUser = (usr) => {
    setIsEdit(true)
    setUser(usr);
  };
  const deleteUsr = (usr) => {
    axios.delete("http://localhost:3202/students/" + usr.id).then(() => {
      getAllUsers();
    });
  };

  const handleUpdate = () => {
    axios.put("http://localhost:3202/students/" + user.id, user).then(() => {
      getAllUsers();
      setIsEdit(false)
      clearForm()
    });
  };
  const clearForm=()=>{
    setUser({
        email: "",
        password: "",
      })
  }
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {isEdit ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </form>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Password</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr,i) => (
            <tr key={i}>
              <td>{usr.id}</td>
              <td>{usr.email}</td>
              <td>{usr.password}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    editUser(usr);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUsr(usr);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={()=>{setAge(45)}}>Change Age</button>
      <h2>{age}</h2> */}
    </div>
  );
};

export default UsrsCrud;