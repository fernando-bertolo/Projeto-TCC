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

export default function InputsMUI(props) {
  const [dadosMarcas, setDadosMarcas] = React.useState([]);
  const [dadosModelos, setDadosModelos] = React.useState([]);
  const [dadosVersao, setDadosVersao] = React.useState([]);
  const [dadosAcessorios, setDadosAcessorios] = React.useState([]);

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
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 4 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //backgroundColor: "red",
        }}
        noValidate
        autoComplete="on"
      >
        <SelectMarcaMUI
          dadosMarcas={dadosMarcas}
          setfieldSelectCarsUnique={props.setfieldSelectCarsUnique}
          fieldSelectCarsUnique={props.fieldSelectCarsUnique}
        />
        <SelectModeloMUI
          dadosModelos={dadosModelos}
          setfieldSelectCarsUnique={props.setfieldSelectCarsUnique}
          fieldSelectCarsUnique={props.fieldSelectCarsUnique}
        />

        <SelectVersaoMUI
          dadosVersao={dadosVersao}
          setfieldSelectCarsUnique={props.setfieldSelectCarsUnique}
          fieldSelectCarsUnique={props.fieldSelectCarsUnique}
        />

        <FormControl variant="standard">
          <InputLabel htmlFor="ano" sx={{ color: "#FFF" }}>
            Ano
          </InputLabel>
          <Input
            type="text"
            id="ano"
            placeholder="Insira o ano"
            required
            sx={{ width: 250, color: "#FFF" }}
            value={props.fieldInputsCars.ano}
            onChange={(event) => {
              props.setfieldInputsCars({
                ...props.fieldInputsCars,
                ano: event.target.value,
              });
            }}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="combustivel" sx={{ color: "#FFF" }}>
            Combustivel
          </InputLabel>
          <Input
            type="text"
            id="combustivel"
            placeholder="Insira o Combustível"
            required
            value={props.fieldInputsCars.combustivel}
            onChange={(event) => {
              props.setfieldInputsCars({
                ...props.fieldInputsCars,
                combustivel: event.target.value,
              });
            }}
            sx={{ width: 250, color: "#FFF" }}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="cor" sx={{ color: "#FFF" }}>
            Cor
          </InputLabel>
          <Input
            type="text"
            id="cor"
            placeholder="Insira a cor"
            required
            value={props.fieldInputsCars.cor}
            onChange={(event) => {
              props.setfieldInputsCars({
                ...props.fieldInputsCars,
                cor: event.target.value,
              });
            }}
            sx={{ width: 250, color: "#FFF" }}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="quilometragem" sx={{ color: "#FFF" }}>
            Quilometragem
          </InputLabel>
          <Input
            type="text"
            id="quilometragem"
            placeholder="Insira a quilometragem"
            required
            value={props.fieldInputsCars.quilometragem}
            onChange={(event) => {
              props.setfieldInputsCars({
                ...props.fieldInputsCars,
                quilometragem: event.target.value,
              });
            }}
            sx={{ width: 250, color: "#FFF" }}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="valor" sx={{ color: "#FFF" }}>
            Valor
          </InputLabel>
          <Input
            type="text"
            id="valor"
            placeholder="Insira o valor"
            required
            value={props.fieldInputsCars.valor}
            onChange={(event) => {
              props.setfieldInputsCars({
                ...props.fieldInputsCars,
                valor: event.target.value,
              });
            }}
            sx={{ width: 250, color: "#FFF" }}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="placa" sx={{ color: "#FFF" }}>
            Placa
          </InputLabel>
          <Input
            type="text"
            id="placa"
            placeholder="Insira a placa"
            required
            value={props.fieldInputsCars.placa}
            onChange={(event) => {
              props.setfieldInputsCars({
                ...props.fieldInputsCars,
                placa: event.target.value,
              });
            }}
            sx={{ width: 250, color: "#FFF" }}
          />
        </FormControl>

        <SelectAcessorioMUI
          dadosAcessorio={dadosAcessorios}
          setfieldSelectCarsUnique={props.setfieldSelectCarsUnique}
          fieldSelectCarsUnique={props.fieldSelectCarsUnique}
        />
      </Box>
    </>
  );
}
