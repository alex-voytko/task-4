import { createAction } from "@reduxjs/toolkit";

export const fetchUserRequest = createAction("users/fetchUserRequest");
export const fetchUserSuccess = createAction("users/fetchUserSuccess");
export const fetchUserError = createAction("users/fetchUserError");

export const updateUserRequest = createAction("users/updateUserRequest");
export const updateUserSuccess = createAction("users/updateUserSuccess");
export const updateUserError = createAction("users/updateUserError");

export const onToggleToAction = createAction("users/onToggleToAction");
