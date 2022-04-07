import * as actionType from "./actionTypes";

const loginGetData = (getData) => ({
  type: actionType.LOGIN_GETDATA,
  payload: getData,
});
const loginSuccess = (user) => ({
  type: actionType.LOGIN_SUCCESS,
  payload: user,
});
const loginUpdate = () => ({
  type: actionType.LOGIN_UPDATE,
});
const loginError = (error) => ({
  type: actionType.LOGIN_ERROR,
  payload: error,
});
const message = (message) => ({
  type: actionType.MESSAGE,
  payload: message,
});

const actions = {
  loginGetData,
  loginSuccess,
  loginUpdate,
  loginError,
  message
};

export default actions;
