import apiClient from "../../api/apiClient";

const socialService = () => {
  const getSocial = () => apiClient().get('/getSocial');
  const createSocial = (data) => apiClient().post(`/createSocial`, data);
  const updateSocial = (data,id) => apiClient().put(`/updateSocial/${id}`, data);
  const deleteSocial = (id) => apiClient().delete(`/deleteSocial/${id}`);

  return {
    getSocial,
    createSocial,
    updateSocial,
    deleteSocial
  };
};

export default socialService;
