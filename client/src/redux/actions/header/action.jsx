import * as actionType from "./actionTypes";

const getHeader = (getHeader) => ({
  type: actionType.GET_HEADER,
  payload: getHeader,
});
const createHeader = () => ({
  type: actionType.CREATE_HEADER,
});
const updateHeader = () => ({
  type: actionType.UPDATE_HEADER,
});
const errorMessage = (error) => ({
  type: actionType.ERROR_MESSAGE,
  payload: error,
});

const actions = {
  getHeader,
  createHeader,
  updateHeader,
  errorMessage
};

export default actions;
