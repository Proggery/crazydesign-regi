import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import { PhotoCamera, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loadFileUpload } from "../../../redux/fileUpload/reducers/thunks";

const Input = styled("input")({
  display: "none",
});

const FileUpload = (props) => {
  const dispatch = useDispatch();
  const { fileUpload } = useSelector((state) => state.fileUpload);

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [alt, setAlt] = useState("");
  // const [uploadFile, setUploadFile] = useState({});

  useEffect(() => {
    if (fileUpload) {
      // setUploadFile(fileUpload);
    }
  }, [fileUpload]);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("alt", alt);

    dispatch(loadFileUpload(formData));
    setFile("")
    setFilename("");
    setAlt("");
  };

  const deleteFileName = () => {
    setFile("")
    setFilename("");
    setAlt("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <Stack direction="row" alignItems="center" spacing={2}>
          {filename && (
            <div>
              {filename}
              <IconButton
                color="primary"
                aria-label="delete picture"
                component="span"
                onClick={deleteFileName}
              >
                <Delete />
              </IconButton>
            </div>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="icon-button-file">
            <Input
              onChange={handleChange}
              accept="image/*"
              id="icon-button-file"
              type="file"
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <TextField
              id="standard-basic"
              label="kép leírás"
              variant="standard"
              onChange={(e) => setAlt(e.target.value)}
              value={alt}
            />
        </Stack>
        <Button variant="outlined" type="submit" value="Feltölt">
          Feltölt
        </Button>
      </form>
      <div>
        {/* {fileUpload && (
        )} */}
        {/* <img width="100" height="100" src="http://localhost:5555/static/profil.png" alt="" /> */}
      </div>
    </>
  );
};

export default FileUpload;
