import DataService from "../../services/socialService";
import actions from "../actions/action";

const messageTimer = 2500;

export const loadGetSocial = () => (dispatch) => {
  DataService()
    .getSocial()
    .then((res) => {
      dispatch(actions.getSocial(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadCreateSocial = (data) => (dispatch) => {
  DataService()
    .createSocial(data)
    .then((res) => {
      if (res.data.error_message) {
        dispatch(actions.message(res.data));
      } else {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message(""));
      }, messageTimer);

      dispatch(loadGetSocial());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadUpdateSocial = (data, id) => (dispatch) => {
  DataService()
    .updateSocial(data, id)
    .then((res) => {
      console.log("sikeres módosítás");
      if (res.data.success_message) {
        dispatch(actions.message(res.data));
      }

      setTimeout(() => {
        dispatch(actions.message(""));
      }, messageTimer);

      dispatch(loadGetSocial());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadDeleteSocial = (id) => (dispatch) => {
  DataService()
    .deleteSocial(id)
    .then((res) => {
      console.log("sikeres törlés");
      if (res.data.success_message) {
        dispatch(actions.message(res.data));
      }
      
      setTimeout(() => {
        dispatch(actions.message(""));
      }, messageTimer);

      dispatch(loadGetSocial());
    })
    .catch((err) => {
      console.log(err);
    });
};
