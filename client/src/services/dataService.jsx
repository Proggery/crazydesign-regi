import apiClient from "../api/apiClient";

const dataService = () => {
  const getAllData = () => apiClient().get(`/getAllData`);

  return {
    getAllData,
  };
};

export default dataService;
