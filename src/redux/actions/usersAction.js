import ACTION_TYPES from "./actionTypes";

export const createUserRequest = (userData) => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  payload: userData
});

export const createUserSeccess = (user) => ({
  type: ACTION_TYPES.CREATE_USER_SECCESS,
  payload: user
});

export const createUserError = (error) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  payload: error
});