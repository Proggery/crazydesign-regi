import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.FILE_UPLOAD:
      return {
        ...state,
        fileUpload: payload,
      };

    default:
      return state;
  }
};

export default reducer;
