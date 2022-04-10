import { createAction } from "@reduxjs/toolkit";

export const fetchUserRequest = createAction("users/fetchUserRequest");
export const fetchUserSuccess = createAction("users/fetchUserSuccess");
export const fetchUserError = createAction("users/fetchUserError");

export const updateUserRequest = createAction("users/updateUserRequest");
export const updateUserSuccess = createAction("users/updateUserSuccess");
export const updateUserError = createAction("users/updateUserError");

export const deleteUsersRequest = createAction("users/deleteUsersRequest");
export const deleteUsersSuccess = createAction("users/deleteUsersSuccess");
export const deleteUsersError = createAction("users/deleteUsersError");
