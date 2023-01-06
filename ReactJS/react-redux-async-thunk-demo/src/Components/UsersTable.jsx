import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUserAction } from '../store/actions/userActions';

const UsersTable = ({persons}) => {
  const dispatch = useDispatch();
  return (
    <div>
        <table className="table">
              <thead>
                <tr>
                  <th>First</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((person,i)=> <tr key={i}>
                    <td>{person.name}</td>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>
                        <button className='btn btn-warning'>Edit Person</button>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{dispatch(deleteUserAction(person.id))}}>Delete Person</button>
                    </td>
                </tr> )}
              </tbody>
            </table>
    </div>
  )
}

export default UsersTable