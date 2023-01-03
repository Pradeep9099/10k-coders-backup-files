import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider }from 'react-redux';
import {createStore} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = {};

const defaultState = {
  users: ["Murali", "Krishna","Ram","Ravi"],
  employess:[],
  products:[],
  books:[]
}


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADDUSER":
      let newUsers= [...state.users]
      newUsers.push(action.paload)
      return {...state, users:newUsers}
    case "DELETEUSER":
      let updatedUsers=state.users.filter ((user)=> user !==action.paload);
      return {...state, users :updatedUsers}
      default:
      return state;
  }
}
const store = createStore(reducer);
console.log (store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
