import React, { useEffect, useState } from "react";
import { Box, IconButton, Stack, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetData,
  loadCreateData,
  loadUpdateData,
  loadDeleteData
} from "../../../redux/user/reducers/thunks";
import TextInput from "../../../components/htmlElements/inputs/TextInput";
import SendButton from "../../../components/htmlElements/buttons/SendButton";
import { Delete, PhotoCamera } from "@mui/icons-material";

const Input = styled("input")({
  display: "none",
});

const UserBox = () => {
  const dispatch = useDispatch();
  const { getData, message } = useSelector((state) => state.user);

  const [data, setData] = useState({
    name: "",
    desc: "",
    alt: "",
    file: "",
    filename: "",
  });
  const [inputChange, setInputChange] = useState(true);
  const [resMessage, setResMessage] = useState({});
  const { name, desc, alt } = data;

  useEffect(() => {
    dispatch(loadGetData());
  }, [dispatch]);

  useEffect(() => {
    if (getData) {
      if (getData[0]) {
        setInputChange(false);

        setData({
          ...data,
          name: getData[0].name,
          desc: getData[0].desc,
        });
      }
    } else {
      setInputChange(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  useEffect(() => {
    setResMessage(message);
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    setData({
      ...data,
      file: e.target.files[0],
      filename: e.target.files[0].name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileImg", data.file);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("alt", alt);

    dispatch(loadCreateData(formData));
    dispatch(loadGetData());
    setData({
      name: "",
      desc: "",
      alt: "",
      file: "",
      filename: "",
    });
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileImg", data.file);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("alt", alt);

    dispatch(loadUpdateData(formData, id));

    setData({
      ...data,
      file: "",
      filename: "",
    });
  };

  const deleteFileName = () => {
    setData({
      ...data,
      file: "",
      filename: "",
    });
  };

  const deleteProfileImg = (id) => {
    dispatch(loadDeleteData(id));
  }

  const nameInputProps = {
    label: "Név",
    name: "name",
    onChange: handleChange,
    variant: "standard",
  };

  const descInputProps = {
    ...nameInputProps,
    name: "desc",
    label: "Alszöveg",
  };
  const altInputProps = {
    ...nameInputProps,
    name: "alt",
    label: "kép leírás",
  };
  const submitButtonProps = {
    value: "Létrehoz",
    variant: "contained",
    type: "submit",
  };
  const updateButtonProps = {
    value: "Módosít",
    onClick: (e) => handleUpdate(e, 1),
    variant: "contained",
  };

  return (
    <>
      <div className="configBox__header">
        <h2>Felhasználó beállítás</h2>
      </div>

      {resMessage && resMessage ? (
        <div className="configBox__message">
          {resMessage.error_message || resMessage.success_message}
        </div>
      ) : (
        <div className="configBox__message"></div>
      )}
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        className="configBox"
      >
        {inputChange ? (
          <div className="configBox__content">
            <Box
              component="form"
              onSubmit={handleSubmit}
              method="POST"
              noValidate
              autoComplete="off"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                {data.filename && (
                  <div>
                    {data.filename}
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
                <label htmlFor="profile__img">
                  <Input
                    onChange={handleFileUpload}
                    accept="image/*"
                    id="profile__img"
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
                <TextInput {...altInputProps} />
              </Stack>
              <TextInput {...nameInputProps} />
              <TextInput {...descInputProps} />
              <SendButton {...submitButtonProps} />
            </Box>
          </div>
        ) : (
          getData &&
          getData.map((item) => (
            <div className="configBox__content" key={item.id}>
              {item.img_name ? (
                <div>
                  <img
                    width="200"
                    src={`http://localhost:5555/static/images/profile-img/${item.img_name}`}
                    alt=""
                  />

                  <IconButton
                    color="primary"
                    aria-label="delete picture"
                    component="span"
                    onClick={()=>deleteProfileImg(item.id)}
                  >
                    <Delete />
                  </IconButton>
                </div>
              ) : (
                <>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {data.filename && (
                      <div>
                        {data.filename}
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
                    <label htmlFor="profile__img">
                      <Input
                        onChange={handleFileUpload}
                        accept="image/*"
                        id="profile__img"
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
                    <TextInput {...altInputProps} />
                  </Stack>
                </>
              )}

              <TextInput defaultValue={name} {...nameInputProps} />

              <TextInput
                defaultValue={desc}
                {...descInputProps}
              />
              <SendButton {...updateButtonProps} />
            </div>
          ))
        )}
      </Box>
    </>
  );
};

export default UserBox;
