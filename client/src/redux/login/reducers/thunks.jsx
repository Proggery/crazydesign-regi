import DataService from "../../services/loginService";
import actions from "../actions/action";

export const loadgetData = (id) => (dispatch) => {
  DataService()
    .getData(id)
    .then((res) => {
      dispatch(actions.loginGetData(res.data));
      // if (res.data.user) {
      //   localStorage.setItem("success", true);
      //   localStorage.setItem("id", res.data.user.id);
      // } else {
      //   dispatch(actions.loginError());
      //   localStorage.setItem("success", false);
      // }
      // dispatch(actions.message(res.data.msg));
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
        dispatch(actions.loginSuccess());
        localStorage.setItem("success", true);
        localStorage.setItem("id", res.data.user.id);
      } else {
        dispatch(actions.loginError());
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
      // if (res.data.user) {
      //   dispatch(actions.loginSuccess());
      //   localStorage.setItem("success", true);
      // } else {
      //   dispatch(actions.loginError());
      //   localStorage.setItem("success", false);
      // }
      // dispatch(actions.message(res.data.msg));
    })
    .catch((err) => {
      console.log(err);
    });
};
