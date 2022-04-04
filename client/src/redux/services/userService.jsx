import apiClient from "../../api/apiClient";

const userService = () => {
  const getUser = () => apiClient().get('/getUser');
  const createUser = (data) => apiClient().post(`/createUser`, data);
  const updateUser = (data,id) => apiClient().put(`/updateUser/${id}`, data);

  return {
    getUser,
    createUser,
    updateUser
  };
};

export default userService;
