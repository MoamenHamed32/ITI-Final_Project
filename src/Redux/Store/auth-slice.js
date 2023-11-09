import { createSlice } from "@reduxjs/toolkit";

const retrieveStoredToken = (name) => {
  const storedProperty = localStorage.getItem(name);
  if (storedProperty) return storedProperty;
  return null;
};

const initialState = {
  isLoggedIn: !!retrieveStoredToken("currentUser"),
  currentUser: retrieveStoredToken("currentUser"),
  currentToken: retrieveStoredToken("currentToken"),
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      //   state.currentToken = action.payload.token;
      //   state.isLoggedIn = true;
      //   state.currentUser = action.payload.user;
      //   localStorage.setItem("currentUser", action.payload.user);
      //   localStorage.setItem("currentToken", action.payload.token);
    },
    logout: (state, action) => {
      state.currentToken = null;
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentToken");
    },
  },
});
