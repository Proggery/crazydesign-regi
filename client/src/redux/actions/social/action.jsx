import * as actionType from "./actionTypes";

const getSocial = (getSocial) => ({
  type: actionType.GET_SOCIAL,
  payload: getSocial,
});
const createSocial = () => ({
  type: actionType.CREATE_SOCIAL,
});
const updateSocial = () => ({
  type: actionType.UPDATE_SOCIAL,
});
const deleteSocial = () => ({
  type: actionType.DELETE_SOCIAL,
});
const errorMessage = (error) => ({
  type: actionType.ERROR_MESSAGE,
  payload: error,
});
const isFull = (isFull) => ({
  type: actionType.IS_FULL,
  payload: isFull,
});

const actions = {
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial,
  errorMessage,
  isFull,
};

export default actions;
