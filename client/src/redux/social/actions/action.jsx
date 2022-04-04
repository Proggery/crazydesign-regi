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
const message = (message) => ({
  type: actionType.SOCIAL_MESSAGE,
  payload: message,
});

const actions = {
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial,
  message,
};

export default actions;
