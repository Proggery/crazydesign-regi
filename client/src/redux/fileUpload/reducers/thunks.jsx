import DataService from "../../services/fileUploadService";
import actions from "../actions/action";

export const loadFileUpload = (fileUpload) => (dispatch) => {
  DataService().fileUpload(fileUpload)
    .then((res) => {
      console.log(res)
      dispatch(actions.fileUpload(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
