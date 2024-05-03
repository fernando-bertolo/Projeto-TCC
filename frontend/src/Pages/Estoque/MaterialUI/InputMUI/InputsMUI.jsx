import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import SelectMarcaMUI from "../Select/SelectMarcaMUI";
import axios from "axios";
import SelectModeloMUI from "../Select/SelectModeloMUI";
import SelectVersaoMUI from "../Select/SelectVersaoMUI";
import SelectAcessorioMUI from "../Select/SelectAcessorioMUI";

import { messageError } from "./InputsMUIStyle";

export default function InputsMUI(props) {
  const { errors } = props;

  const [dadosMarcas, setDadosMarcas] = React.useState([]);
  const [dadosModelos, setDadosModelos] = React.useState([]);
  const [dadosVersao, setDadosVersao] = React.useState([]);
  const [dadosAcessorios, setDadosAcessorios] = React.useState([]);

  const [inputAcessorio, setInputAcessorio] = React.useState({
    acessorios: [],
  });

  const buscaMarcas = async () => {
    await axios
      .get("http://localhost:3010/visualizar-marcas")
      .then((response) => {
        setDadosMarcas(response.data);
      });
  };

  const buscaModelos = async () => {
    await axios
      .get("http://localhost:3010/visualizar-modelos/")
      .then((response) => {
        setDadosModelos(response.data);
      });
  };

  const buscaVersoes = async () => {
    await axios
      .get("http://localhost:3010/visualizar-versao")
      .then((response) => {
        setDadosVersao(response.data);
      });
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

  React.useEffect(() => {
    buscaMarcas();
    buscaModelos();
    buscaVersoes();
    buscaAcessorio();
  }, []);

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
      <SelectMarcaMUI dadosMarcas={dadosMarcas} register={props.register} />
      <SelectModeloMUI dadosModelos={dadosModelos} register={props.register} />
      <SelectVersaoMUI dadosVersao={dadosVersao} register={props.register} />

      <FormControl variant="standard">
        <InputLabel htmlFor="ano">Ano</InputLabel>
        <Input
          type="text"
          id="ano"
          placeholder="Insira o ano"
          required
          {...props.register("ano")}
          sx={{ width: 250 }}
        />
        {
          <messageError style={{ color: "red", fontSize: "0.8rem" }}>
            {errors?.ano?.message}
          </messageError>
        }
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="combustivel">Combustivel</InputLabel>
        <Input
          type="text"
          id="combustivel"
          placeholder="Insira o Combustível"
          required
          {...props.register("combustivel")}
          sx={{ width: 250 }}
        />

        {
          <messageError style={{ color: "red", fontSize: "0.8rem" }}>
            {errors?.combustivel?.message}
          </messageError>
        }
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="cor">Cor</InputLabel>
        <Input
          type="text"
          id="cor"
          placeholder="Insira a cor"
          required
          {...props.register("cor")}
          sx={{ width: 250 }}
        />

        {
          <messageError style={{ color: "red", fontSize: "0.8rem" }}>
            {errors?.cor?.message}
          </messageError>
        }
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="quilometragem">Quilometragem</InputLabel>
        <Input
          type="text"
          id="quilometragem"
          placeholder="Insira a quilometragem"
          required
          {...props.register("quilometragem")}
          sx={{ width: 250 }}
        />

        {
          <messageError style={{ color: "red", fontSize: "0.8rem" }}>
            {errors?.quilometragem?.message}
          </messageError>
        }
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="valor">Valor</InputLabel>
        <Input
          type="text"
          id="valor"
          placeholder="Insira o valor"
          required
          {...props.register("valor")}
          sx={{ width: 250 }}
        />

        {
          <messageError style={{ color: "red", fontSize: "0.8rem" }}>
            {errors?.valor?.message}
          </messageError>
        }
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="placa">Placa</InputLabel>
        <Input
          type="text"
          id="placa"
          placeholder="Insira a placa"
          required
          {...props.register("placa")}
          sx={{ width: 250 }}
        />

        {
          <messageError style={{ color: "red", fontSize: "0.8rem" }}>
            {errors?.placa?.message}
          </messageError>
        }
      </FormControl>

      <SelectAcessorioMUI
        dadosAcessorio={dadosAcessorios}
        register={props.register}
      />
    </Box>
  );
}
