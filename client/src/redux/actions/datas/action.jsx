import * as actionType from "./actionTypes";

const loadingData = () => ({
  type: actionType.LOADING_DATA,
});
const getAllData = (allData) => ({
  type: actionType.GET_ALL_DATA,
  payload: allData,
});
const createData = () => ({
  type: actionType.CREATE_DATA,
});
const updateData = () => ({
  type: actionType.UPDATE_DATA,
});

const actions = {
  loadingData,
  getAllData,
  createData,
  updateData
};

export default actions;
