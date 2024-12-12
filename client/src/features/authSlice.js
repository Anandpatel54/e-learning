import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // Action to handle user login
    userLoggedIn: (state, action) => {
      state.user = action.payload.user; // Update user with data from action
      state.isAuthenticated = true; // Set authentication to true
    },

    // Action to handle user logout
    userLoggedOut: (state) => {
      state.user = null; // Reset user to null
      state.isAuthenticated = false; // Set authentication to false
    },
  },
});

// Export actions to use in components
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

// Export the reducer to integrate with the store
export default authSlice.reducer;
