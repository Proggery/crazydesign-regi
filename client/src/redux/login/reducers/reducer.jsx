import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionType.LOGIN_GETDATA:
      return {
        ...state,
        isSuccess: true,
        getData: payload,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        user: payload,
      };
    case actionType.LOGIN_UPDATE:
      return {
        ...state,
      };
    case actionType.LOGIN_ERROR:
      return {
        ...state,
        isSuccess: false,
        error: payload,
      };
    case actionType.MESSAGE:
      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
};

export default reducer;
