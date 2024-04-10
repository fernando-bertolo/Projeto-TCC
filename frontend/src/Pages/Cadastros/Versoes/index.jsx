import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";
import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function Versoes() {
  const [dadosVersao, setDadosVersao] = useState();

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const buscaVersao = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-versao")
        .then((response) => {
          setDadosVersao(response.data);
        });
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
    buscaVersao();
  }, []);

  const excluirVersao = async (dadosVersao) => {
    try {
      console.log(dadosVersao);
      if (dadosVersao) {
        await axios.delete(
          `http://localhost:3010/deletar-versao/${dadosVersao.idVersao}`
        );
        // Mensagem de sucesso
        toast.success("Versão excluída com sucesso!!", {
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
        buscaVersao();
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

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavegacaoCadastro />
          <Listagem
            title="Versões"
            rota="versao"
            dadosVersao={dadosVersao}
            primeiraColuna="Marca"
            segundaColuna="Modelo"
            terceiraColuna="Versao"
            atualizaVersao={buscaVersao}
            excluirVersao={excluirVersao}
          />
        </DivContentCadastros>
        <ToastContainer />
      </Body>
    </>
  );
}

export default Versoes;
