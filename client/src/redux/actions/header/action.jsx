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

const actions = {
  getHeader,
  createHeader,
  updateHeader
};

export default actions;
