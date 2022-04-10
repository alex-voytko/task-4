import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as userActions from "./user-actions";
import * as authActions from "../auth-redux/auth-actions";

const items = createReducer([], {
  [userActions.fetchUserSuccess]: (_, { payload }) => payload,
});

const currentUser = createReducer(
  {},
  {
    [userActions.updateUserSuccess]: (_, { payload }) => ({ ...payload }),
    [authActions.logOutUserSuccess]: (state, _) => "",
  },
);

const error = createReducer(null, {
  [userActions.fetchUserError]: (_, { payload }) => payload,
});

const redirect = createReducer(false, {
  [userActions.fetchUserSuccess]: () => true,
  [authActions.logOutUserSuccess]: () => false,
});
const loading = createReducer(false, {
  [userActions.fetchUserRequest]: () => true,
  [userActions.fetchUserSuccess]: () => false,
});

export default combineReducers({
  items,
  error,
  currentUser,
  redirect,
  loading,
});
