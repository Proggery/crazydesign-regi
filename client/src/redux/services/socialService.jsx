import apiClient from "../../api/apiClient";

const service = () => {
  const getData = () => apiClient().get('/getSocial');
  const createData = (data) => apiClient().post(`/createSocial`, data);
  const updateData = (data,id) => apiClient().put(`/updateSocial/${id}`, data);
  const deleteData = (id) => apiClient().delete(`/deleteSocial/${id}`);

  return {
    getData,
    createData,
    updateData,
    deleteData
  };
};

export default service;
