import DataService from "../../../services/socialService";
import actions from "../../actions/social/action";

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
      console.log(res.data);
      if (res.data.errorMessage) {
        dispatch(actions.errorMessage(res.data));
      }
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
      dispatch(actions.updateSocial());
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
      dispatch(actions.deleteSocial());
    })
    .catch((err) => {
      console.log(err);
    });
};
