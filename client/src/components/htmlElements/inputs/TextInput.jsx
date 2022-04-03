import "./textInput.css";
import { TextField } from "@mui/material";

const TextInput = (props) => {
  let {
    id,
    label,
    defaultValue,
    value,
    onChange,
    name,
    variant,
    placeholder,
    disabled,
  } = props;

  return (
    <TextField
      id={id}
      sx={{ my: 2 }}
      label={label}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      variant={variant}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInput;
