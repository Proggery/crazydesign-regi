import { combineReducers } from "redux";
import reducer from "./datas/reducer";

const rootReducer = () =>
  combineReducers({
    data: reducer,
  });

export default rootReducer;
