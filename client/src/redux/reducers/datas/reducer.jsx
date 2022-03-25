import * as actionType from "../../actions/datas/actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.LOADING_DATA:
      return {
        ...state,
        isLoading: true,
        allData: [],
        singleData: {},
        errorMessage: "",
      };
    case actionType.GET_ALL_DATA:
      return {
        ...state,
        isLoading: false,
        allData: payload,
      };

    default:
      return state;
  }
};

export default reducer;
