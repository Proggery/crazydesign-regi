import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.GET_HEADER:
      return {
        ...state,
        getHeader: payload,
      };
    case actionType.CREATE_HEADER:
    case actionType.UPDATE_HEADER:
      return {
        ...state,
      };
      case actionType.HEADER_MESSAGE:
        return {
          ...state,
          message: payload,
        };

    default:
      return state;
  }
};

export default reducer;
