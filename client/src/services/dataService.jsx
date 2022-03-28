import apiClient from "../api/apiClient";

const dataService = () => {
  const getHeader = () => apiClient().get('/getHeader');
  const createData = (data) => apiClient().post(`/createHeader`, data);
  const updateData = (data,id) => apiClient().put(`/updateHeader/${id}`, data);

  return {
    getHeader,
    createData,
    updateData
  };
};

export default dataService;
