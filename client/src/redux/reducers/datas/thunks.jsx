import DataService from "../../../services/dataService";
import actions from "../../actions/datas/action";

export const loadGetHeader = () => (dispatch) => {
  dispatch(actions.loadingData());

  DataService().getHeader()
    .then((res) => {
      dispatch(actions.getAllData(res.data));
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
      dispatch(actions.createData());
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
      dispatch(actions.updateData());
    })
    .catch((err) => {
      console.log(err);
    });
};
