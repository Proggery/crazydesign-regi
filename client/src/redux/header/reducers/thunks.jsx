import DataService from "../../services/headerService";
import actions from "../actions/action";

export const loadGetHeader = () => (dispatch) => {
  DataService().getHeader()
    .then((res) => {
      dispatch(actions.getHeader(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadCreateHeader = (data) => (dispatch) => {
  DataService()
    .createHeader(data)
    .then((res) => {
      console.log(res.data.errorMessage)
      dispatch(actions.errorMessage(res.data.errorMessage));
    })
    .catch((err) => {
      console.log(err);
    });
  };
  export const loadUpdateHeader = (data, id) => (dispatch) => {
    DataService()
    .updateHeader(data, id)
    .then((res) => {
      console.log("sikeres módosítás");
      dispatch(actions.updateHeader());
    })
    .catch((err) => {
      console.log(err);
    });
};
