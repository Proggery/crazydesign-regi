import DataService from "../../services/loginService";
import actions from "../actions/action";

export const loadgetData = (id) => (dispatch) => {
  DataService()
    .getData(id)
    .then((res) => {
      dispatch(actions.getData(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadCreateData = (data) => (dispatch) => {
  DataService()
    .createData(data)
    .then((res) => {
      if (res.data.user) {
        dispatch(actions.createData());
        localStorage.setItem("success", true);
        localStorage.setItem("id", res.data.user.id);
      } else {
        dispatch(actions.error());
        localStorage.setItem("success", false);
      }
      dispatch(actions.message(res.data.msg));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadUpdateData = (data, id) => (dispatch) => {
  DataService()
    .updateData(data, id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
