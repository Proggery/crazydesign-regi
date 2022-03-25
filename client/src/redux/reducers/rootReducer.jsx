import { combineReducers } from "redux";
import reducer from "./datas/reducer";

const rootReducer = () =>
  combineReducers({
    allData: reducer,
  });

export default rootReducer;
