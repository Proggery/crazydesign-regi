import * as actionType from "./actionTypes";

const fileUpload = (fileUpload) => ({
  type: actionType.FILE_UPLOAD,
  payload: fileUpload,
});

const actions = {
  fileUpload,
};

export default actions;
