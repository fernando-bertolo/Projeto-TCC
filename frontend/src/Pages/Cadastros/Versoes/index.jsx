import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";
import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function Versoes() {
  const [dadosVersao, setDadosVersao] = useState();

  const buscaVersao = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-versao")
        .then((response) => {
          setDadosVersao(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaVersao();
  }, []);

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavegacaoCadastro />
          <Listagem
            title="Versoes"
            rota="versao"
            dadosVersao={dadosVersao}
            primeiraColuna="Marca"
            segundaColuna="Modelo"
            terceiraColuna="Versao"
          />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Versoes;
