import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

export default function SelectMarcaMUI(props) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    props.setfieldSelectCarsUnique({
      ...props.fieldSelectCarsUnique,
      marca: event.target.value,
    });
  };

  // Cria um mapeamento de ID para Nome
  const idToNameMap = props.dadosMarcas.reduce((map, marcas) => {
    map[marcas.idMarca] = marcas.nomeMarca;
    return map;
  }, {});

  return (
    <>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-simple-select-label" sx={{ color: "#FFF" }}>
          Selecione a marca
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Selecione a marca" />}
          renderValue={(selected) =>
            selected.map((id) => idToNameMap[id]).join(", ")
          }
          sx={{ borderRadius: 3, color: "#FFF" }}
          defaultValue=""
        >
          {props.dadosMarcas.map((infoMarca) => (
            <MenuItem key={infoMarca.idMarca} value={infoMarca.idMarca}>
              <Checkbox checked={personName.includes(infoMarca.idMarca)} />
              <ListItemText primary={infoMarca.nomeMarca} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
