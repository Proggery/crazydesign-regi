import { combineReducers } from "redux";
import headerReducer from "../header/reducers/reducer";
import socialReducer from "../social/reducers/reducer";
import fileUploadReducer from "../fileUpload/reducers/reducer";
import userReducer from "../user/reducers/reducer";
import loginReducer from "../login/reducers/reducer";

const state = () =>
  combineReducers({
    header: headerReducer,
    social: socialReducer,
    fileUpload: fileUploadReducer,
    user: userReducer,
    login: loginReducer,
  });

export default state;
