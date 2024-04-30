import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

export default function InputsMUI(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      {props.inputs.map((input, index) => (
        <FormControl key={index} variant="standard">
          <InputLabel htmlFor={input.name}>{input.label}</InputLabel>
          <Input
            type={input.type}
            id={input.name}
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
            {...input.register}
          />
        </FormControl>
      ))}
    </Box>
  );
}
