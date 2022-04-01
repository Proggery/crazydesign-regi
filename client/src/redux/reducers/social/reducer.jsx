import * as actionType from "../../actions/social/actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.GET_SOCIAL:
      return {
        ...state,
        getSocial: payload,
      };
    case actionType.CREATE_SOCIAL:
    case actionType.UPDATE_SOCIAL:
    case actionType.DELETE_SOCIAL:
      return {
        ...state,
      };
    case actionType.ERROR_MESSAGE:
      return {
        ...state,
        error: payload,
      };
    case actionType.IS_FULL:
      return {
        ...state,
        isFull: true,
      };

    default:
      return state;
  }
};

export default reducer;
