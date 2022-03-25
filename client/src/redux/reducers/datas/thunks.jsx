import DataService from "../../../services/dataService";
import actions from "../../actions/datas/action";

export const loadAllData = () => (dispatch) => {
  dispatch(actions.loadingData());

  DataService()
    .getAllData()
    .then((res) => {
      dispatch(actions.getAllData(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
