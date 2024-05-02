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

export default function SelectAcessorioMUI(props) {
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
        <InputLabel id="demo-multiple-checkbox-labe" sx={{ color: "black" }}>
          Selecione os Acessórios
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-labe"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Selecione os Acessórios" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{ borderRadius: 3 }}
          defaultValue=""
          {...props.register("selectAcessorios")}
        >
          {props.dadosAcessorio.map((infoAcessorio) => (
            <MenuItem
              key={infoAcessorio.idAcessorio}
              value={infoAcessorio.idAcessorio}
            >
              <Checkbox
                checked={personName.includes(infoAcessorio.idAcessorio)}
              />
              <ListItemText primary={infoAcessorio.nomeAcessorio} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
