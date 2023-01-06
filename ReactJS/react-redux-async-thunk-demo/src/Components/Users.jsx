import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServerAction } from "../store/actions/userActions";
import UsersTable from "./UsersTable";

const Users = () => {
  const dispatch = useDispatch();
  const usersDetails = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersFromServerAction());
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <UsersTable persons={usersDetails} />
        </div>
      </div>
    </div>
  );
};

export default Users;

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { deleteUserAction, getUsersFromServerAction } from "../store/actions/userActions";

// class Users extends Component {

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="col-4"></div>
//             <div className="col-8">
//               <UsersTable persons={this.props.usersDetails} handleDelete={this.props.deleteUser} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   componentDidMount(){
//     this.props.getUsers();
//   }
// }

// function mapStateToProps(state) {
//   return {
//     usersDetails:state.users
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     getUsers:()=>dispatch(getUsersFromServerAction()),
//     deleteUser:(id)=>dispatch(deleteUserAction(id))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Users);