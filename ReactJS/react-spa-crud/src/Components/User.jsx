import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ usr }) => {
  const navigate = useNavigate();
  const handleDelete = (usr) => {
    console.log(usr);

    navigate('/delete/'+usr.id)
  };
  const hanldeEdit = (usr)=>{
    navigate('/edit/'+usr.id)
  }
  return (
    <tr>
      <td>{usr.id}</td>
      <td>{usr.fname}</td>
      <td>{usr.lname}</td>
      <td>{usr.email}</td>
      <td>{usr.password}</td>
      <td>
        <button className="btn btn-warning" onClick={()=>{hanldeEdit(usr)}}>Edit</button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(usr);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;