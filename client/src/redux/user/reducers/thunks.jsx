import DataService from "../../services/userService";
import actions from "../actions/action";

const messageTimer = 2800;

export const loadGetUser = () => (dispatch) => {
  DataService()
    .getUser()
    .then((res) => {
      dispatch(actions.getUser(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadCreateUser = (data) => (dispatch) => {
  DataService()
    .createUser(data)
    .then((res) => {
      if (res.error_message) {
        dispatch(actions.message(res.data));
      } else {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message({}));
      }, messageTimer);
      dispatch(loadGetUser());
    })
    .catch((err) => {
      console.log(err);
    });
};
export const loadUpdateUser = (data, id) => (dispatch) => {
  DataService()
    .updateUser(data, id)
    .then((res) => {
      if (res.error_message) {
        dispatch(actions.message(res.data));
      } else {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message({}));
      }, messageTimer);

      dispatch(loadGetUser());
    })
    .catch((err) => {
      console.log(err);
    });
};
