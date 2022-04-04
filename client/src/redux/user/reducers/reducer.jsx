import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.GET_USER:
      return {
        ...state,
        getUser: payload,
      };
    case actionType.CREATE_USER:
    case actionType.UPDATE_USER:
      return {
        ...state,
      };
      case actionType.USER_MESSAGE:
        return {
          ...state,
          message: payload,
        };

    default:
      return state;
  }
};

export default reducer;
