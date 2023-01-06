import axios from "axios";
import { GET_USERS } from "./actionTypes";
export const getUsersFromServerAction = () => {
  return (dispatch) => {
    getLatestUsers(dispatch);
  };
};

export const deleteUserAction = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:3201/users/" + id).then(() => {
        getLatestUsers(dispatch)
    });
  };
};

function getLatestUsers(dispatch) {
  axios.get("http://localhost:3201/users").then((response) => {
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  });
}