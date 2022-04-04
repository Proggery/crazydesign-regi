import apiClient from "../../api/apiClient";

const service = () => {
  const getData= () => apiClient().get('/getUser');
  const createData= (data) => apiClient().post(`/createUser`, data);
  const updateData= (data,id) => apiClient().put(`/updateUser/${id}`, data);

  return {
    getData,
    createData,
    updateData
  };
};

export default service;
