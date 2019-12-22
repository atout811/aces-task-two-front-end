import { ADD_USER, FETCH_USER } from "./types";
import axios from "axios";

const apiURL = "http://localhost:6777/";

export const createUser = ({ name, email, password }) => {
  return dispatch => {
    return axios
      .post(`${apiURL}/add`, { name, email, password })
      .then(response => {
        dispatch(createUserSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createUserSuccess = data => {
  return {
    type: ADD_USER,
    payload: {
      _id: data._id,
      name: data.name,
      email: data.email,
      password: data.password
    }
  };
};

export const fetchUser = user => {
  return {
    type: FETCH_USER,
    user
  };
};

export const fetchUserShow = () => {
  return dispatch => {
    return axios
      .get(`${apiURL}/me`)
      .then(response => {
        dispatch(fetchUser(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
