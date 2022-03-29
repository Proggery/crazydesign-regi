import DataService from "../../../services/headerService";
import actions from "../../actions/header/action";

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
    .then(() => {
      console.log("sikeres felvétel");
      dispatch(actions.createHeader());
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
