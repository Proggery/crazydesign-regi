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

const actions = {
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial
};

export default actions;
