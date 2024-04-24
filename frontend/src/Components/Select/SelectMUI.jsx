import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { useState, useEffect } from "react";
import axios from "axios";

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

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);
  const [dadosAcessorios, setDadosAcessorios] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const buscaAcessorio = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-acessorio")
        .then((response) => {
          setDadosAcessorios(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaAcessorio();
  }, []);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Selecione</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Selecione" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {dadosAcessorios.map((infoAcessorio) => (
            <MenuItem
              key={infoAcessorio.idAcessorio}
              value={infoAcessorio.nomeAcessorio}
            >
              <Checkbox checked={personName.indexOf(infoAcessorio) > -1} />
              <ListItemText primary={infoAcessorio.nomeAcessorio} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
