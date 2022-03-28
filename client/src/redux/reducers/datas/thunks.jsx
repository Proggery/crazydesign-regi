import DataService from "../../../services/dataService";
import actions from "../../actions/datas/action";

export const loadHeader = () => (dispatch) => {
  dispatch(actions.loadingData());

  DataService().getHeader()
    .then((res) => {
      dispatch(actions.getAllData(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadCreateData = (data) => (dispatch) => {
  DataService()
    .createData(data)
    .then(() => {
      console.log("sikeres felvétel");
      dispatch(actions.createData());
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
      dispatch(actions.updateData());
    })
    .catch((err) => {
      console.log(err);
    });
};
