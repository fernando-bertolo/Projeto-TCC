import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";
import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";

function Marcas() {
  const [dadosMarcas, setDadosMarcas] = useState();

  const buscaMarcas = () => {
    axios.get("http://localhost:3010/visualizar-marcas").then((response) => {
      setDadosMarcas(response.data);
    });
  };

  useEffect(() => {
    buscaMarcas();
  }, []);

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavegacaoCadastro />
          <Listagem
            title="Marcas"
            rota="marca"
            primeiraColuna="Nome"
            dadosMarcas={dadosMarcas}
            atualizaMarcas={buscaMarcas}
          />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Marcas;
