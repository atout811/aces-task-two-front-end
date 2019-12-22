import { ADD_USER, FETCH_USER } from "../actions/types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      console.log("add" + state);
      return [...state, action.payload];
    case FETCH_USER:
      console.log("fetch" + state);
      return action.user;

    default:
      console.log(state);
      return state;
  }
}
