import * as actionType from "./actionTypes";

const getUser = (getUser) => ({
  type: actionType.GET_USER,
  payload: getUser,
});
const createUser = () => ({
  type: actionType.CREATE_USER,
});
const updateUser = () => ({
  type: actionType.UPDATE_USER,
});
const message = (message) => ({
  type: actionType.USER_MESSAGE,
  payload: message,
});

const actions = {
  getUser,
  createUser,
  updateUser,
  message
};

export default actions;
