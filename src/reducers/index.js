const initialState = {
  topleft: "Log In",
  topright: "Sign Up",
  toleft: "/login",
  toright: "/signup",
  isLogged: false,
  name: "",
  email: "",
  role: ""
};

const headerReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "IS_LOGGED") {
    return {
      isLogged: true,
      topleft: action.payload.name,
      topright: "Log Out",
      toleft: "/profile",
      toright: "/",
      name: action.payload.name,
      email: action.payload.email,
      role: action.payload.role
    };
  }
  if (action.type === "LOGGED_OUT") {
    if (state.topright === "Log Out") {
      localStorage.removeItem("x-auth-token");
    }
    return {
      topleft: "Log In",
      topright: "Sign Up",
      toleft: "/login",
      toright: "/signup",
      isLogged: false
    };
  }
  return state;
};

export default headerReducer;
