import apiClient from "../api/apiClient";

const dataService = () => {
  const getAllData = () => apiClient().get();
  const createData = (data) => apiClient().post(`/create`, data);
  const updateData = (data,id) => apiClient().put(`/update/${id}`, data);

  return {
    getAllData,
    createData,
    updateData
  };
};

export default dataService;
