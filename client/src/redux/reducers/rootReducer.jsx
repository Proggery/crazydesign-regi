import { combineReducers } from "redux";
import headerReducer from "./header/reducer";
import socialReducer from "./social/reducer";

const rootReducer = () =>
  combineReducers({
    header: headerReducer,
    social: socialReducer,
  });

export default rootReducer;
