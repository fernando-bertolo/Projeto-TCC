import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectVersaoMUI(props) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
          Selecione a versão
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Selecione a versão" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{ borderRadius: 3 }}
        >
          {props.dadosVersao.map((infoVersao) => (
            <MenuItem
              key={infoVersao.idVersao}
              value={infoVersao.idVersao}
              {...props.register("idVersao")}
            >
              <Checkbox checked={personName.includes(infoVersao.idVersao)} />
              <ListItemText primary={infoVersao.nomeVersao} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
