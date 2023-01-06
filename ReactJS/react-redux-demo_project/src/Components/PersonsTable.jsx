import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePersonAction } from '../store/Actions';

class PersonsTable extends Component {
  render() {
    console.log(this.props.persons)
    const {persons} = this.props;
    return (
      <div>
          <table className="table">
              <thead>
                <tr>
                  <th>First</th>
                  <th>Last</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((person,i)=> <tr key={i}>
                    <td>{person.fname}</td>
                    <td>{person.lname}</td>
                    <td>{person.email}</td>
                    <td>
                        <button className='btn btn-warning'>Edit Person</button>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{this.props.deletePerson(person)}}>Delete Person</button>
                    </td>
                </tr> )}
              </tbody>
            </table>
      </div>
    )
  }
}
function mapStateToProps(state){
    console.log(state)
    return {
        persons:state.persons
    }
}
function mapDispatchToProps(dispatch){
    return {
        deletePerson:(person)=>dispatch(deletePersonAction(person))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonsTable)