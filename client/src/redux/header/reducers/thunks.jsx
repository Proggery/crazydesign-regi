import DataService from "../../services/headerService";
import actions from "../actions/action";

const messageTimer = 2800;

export const loadGetHeader = () => (dispatch) => {
  DataService()
    .getHeader()
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

      if (res.error_message) {
        dispatch(actions.message(res.data));
      } else {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message(undefined));
      }, messageTimer);
      dispatch(loadGetHeader());
    })
    .catch((err) => {
      console.log(err);
    });
};
export const loadUpdateHeader = (data, id) => (dispatch) => {
  DataService()
    .updateHeader(data, id)
    .then((res) => {

      if (res.error_message) {
        dispatch(actions.message(res.data));
      } else {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message(undefined));
      }, messageTimer);

      dispatch(loadGetHeader());
    })
    .catch((err) => {
      console.log(err);
    });
};
