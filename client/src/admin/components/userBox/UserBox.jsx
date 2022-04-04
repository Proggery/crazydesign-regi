import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGetData,
  loadCreateData,
  loadUpdateData,
} from "../../../redux/user/reducers/thunks";
import TextInput from "../../../components/htmlElements/inputs/TextInput";
import SendButton from "../../../components/htmlElements/buttons/SendButton";
import { showDefValue } from "../../../components/htmlElements/inputs/properties";

const UserBox = () => {
  const dispatch = useDispatch();
  const { getData, message } = useSelector((state) => state.user);

  const [data, setData] = useState({
    title: "",
    subTitle: "",
  });
  const [inputChange, setInputChange] = useState(true);

  const [resMessage, setResMessage] = useState({});

  const { title, subTitle } = data;

  useEffect(() => {
    dispatch(loadGetData());
  }, [dispatch]);

  useEffect(() => {
    if (getData) {
      if (getData[0]) {
        setInputChange(false);

        setData({
          ...data,
          title: getData[0].title,
          subTitle: getData[0].sub_title,
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
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loadCreateData(data));
    dispatch(loadGetData());
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(loadUpdateData(data, id));
  };

  const titleInputProps = {
    label: "Név",
    name: "title",
    onChange: handleChange,
    variant: "standard",
  };

  const subTitleInputProps = {
    ...titleInputProps,
    name: "subTitle",
    label: "Alszöveg",
  };
  const submitButtonProps = {
    value: "Létrehoz",
    onClick: handleSubmit,
    variant: "contained",
  };
  const updateButtonProps = {
    value: "Módosít",
    onClick: (e) => handleUpdate(e, 1),
    variant: "contained",
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      className="configBox"
    >
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

      {inputChange ? (
        <div className="configBox__content">
          <TextInput {...titleInputProps} />
          <TextInput {...subTitleInputProps} />
          <SendButton {...submitButtonProps} />
        </div>
      ) : (
        getData &&
        getData.map((item, key) => (
          <div className="configBox__content" key={key}>
            <TextInput defaultValue={title} {...titleInputProps} />

            <TextInput
              showDefValue={showDefValue}
              defaultValue={subTitle}
              {...subTitleInputProps}
            />
            <SendButton {...updateButtonProps} />
          </div>
        ))
      )}
    </Box>
  );
};

export default UserBox;
