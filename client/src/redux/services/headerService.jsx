import apiClient from "../../api/apiClient";

const service = () => {
  const getData = () => apiClient().get('/getHeader');
  const createData = (data) => apiClient().post(`/createHeader`, data);
  const updateData = (data,id) => apiClient().put(`/updateHeader/${id}`, data);

  return {
    getData,
    createData,
    updateData
  };
};

export default service;
