import { TextField } from "@mui/material";
import styles from "./WhiteTextField.module.css";

const WhiteTextField = ({
  label,
  name,
  type = "text",
  multiline = false,
  rows,
  ...props
}) => {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      fullWidth
      margin="normal"
      required
      sx={{
        input: { color: "white" },
        "& .MuiInputBase-inputMultiline": { color: "white" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "white" },
          "&:hover fieldset": { borderColor: "white" },
          "&.Mui-focused fieldset": { borderColor: "white" },
        },
        "& .MuiInputLabel-root": { color: "white" },
        "& .MuiInputLabel-root.Mui-focused": { color: "white" },
      }}
      {...props}
    />
  );
};

export default WhiteTextField;
