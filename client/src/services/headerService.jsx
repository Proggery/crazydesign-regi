import apiClient from "../api/apiClient";

const headerService = () => {
  const getHeader = () => apiClient().get('/getHeader');
  const createHeader = (data) => apiClient().post(`/createHeader`, data);
  const updateHeader = (data,id) => apiClient().put(`/updateHeader/${id}`, data);

  return {
    getHeader,
    createHeader,
    updateHeader
  };
};

export default headerService;
