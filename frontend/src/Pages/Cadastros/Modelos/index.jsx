import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";

function Modelos() {
  const [dadosModelos, setDadosModelos] = useState();

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

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

  const excluirModelo = async (dadosModelos) => {
    try {
      if (dadosModelos.idModelo) {
        await axios.delete(
          `http://localhost:3010/deletar-modelos/${dadosModelos.idModelo}`
        );

        // Mensagem de sucesso
        toast.success("Modelo excluído com sucesso!!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        await delay(3.5);
        buscaModelos();
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warn(error.response.data.Error, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log(error);
      }
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
            excluirModelo={excluirModelo}
            atualizaModelo={buscaModelos}
          />
          <ToastContainer />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Modelos;
