import DataService from "../../services/socialService";
import actions from "../actions/action";

const messageTimer = 2700;

export const loadGetData = () => (dispatch) => {
  DataService()
    .getData()
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
      if (res.data.error_msg) {
        dispatch(actions.message(res.data));
      } else {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message(undefined));
      }, messageTimer);

      dispatch(loadGetData());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadUpdateData = (data, id) => (dispatch) => {
  DataService()
    .updateData(data, id)
    .then((res) => {
      console.log("sikeres módosítás");
      if (res.data.success_message) {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message({}));
      }, messageTimer);

      dispatch(loadGetData());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadDeleteData = (id) => (dispatch) => {
  DataService()
    .deleteData(id)
    .then((res) => {
      if (res.data.success_message) {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message({}));
      }, messageTimer);

      dispatch(loadGetData());
    })
    .catch((err) => {
      console.log(err);
    });
};
