import apiClient from "../../api/apiClient";

const fileUploadService = () => {
  const fileUpload = (formData) => apiClient().post("/createFileUpload", formData);

  return {
    fileUpload,
  };
};

export default fileUploadService;
