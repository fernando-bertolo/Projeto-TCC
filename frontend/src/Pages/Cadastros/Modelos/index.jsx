import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";

function Modelos() {
  const [dadosModelos, setDadosModelos] = useState();

  const buscaModelos = async () => {
    try {
      const response = await axios
        .get("http://localhost:3010/visualizar-modelos")
        .then((response) => {
          setDadosModelos(response.data);
        });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaModelos();
  }, []);

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavegacaoCadastro />
          <Listagem
            title="Modelos"
            rota="modelo"
            dadosModelos={dadosModelos}
            primeiraColuna="Marca"
            segundaColuna="Modelo"
          />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Modelos;
