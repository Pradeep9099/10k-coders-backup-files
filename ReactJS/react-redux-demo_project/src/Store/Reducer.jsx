import { combineReducers } from "redux";
import { ADD_PERSON, DELETE_PERSON } from "./ActionTypes"

const defaultState = {
    users: ["Murali", "Krishna", "Ram", "Ravi"],
    persons: [{ fname: "Murali", lname: "Krishna", email: "vmurali@gmail.com" }],
    products: [],
    books: []
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADDUSER":
            let newUsers = [...state.users]
            newUsers.push(action.paload)
            return { ...state, users: newUsers }
        case "DELETEUSER":
            let updatedUsers = state.users.filter((user) => user !== action.paload);
            return { ...state, users: updatedUsers }

        default:
            return state;
    }
};

export const personsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            let newPersons = [...state]
            newPersons.push(action.payload);
            return newPersons
        case DELETE_PERSON:
            return state.filter((person) => person.email !== action.paload.email)
        default:
            return state.persons;
    }
};

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    users: userReducer,
    persons: personsReducer,
    products: productsReducer,
    books: booksReducer
})