import * as actionType from "./actionTypes";

const loadingData = () => ({
  type: actionType.LOADING_DATA,
});
const getAllData = (allData) => ({
  type: actionType.GET_ALL_DATA,
  payload: allData,
});

const actions = {
  loadingData,
  getAllData,
};

export default actions;
