import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";

import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Função de delay
function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

function Acessorios() {
  const [dadosAcessorio, setDadosAcessorio] = useState();

  const buscaAcessorio = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-acessorio")
        .then((response) => {
          setDadosAcessorio(response.data);
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
    buscaAcessorio();
  }, []);

  const excluirAcessorio = async (dadosAcessorios) => {
    try {
      if (dadosAcessorios) {
        console.log(dadosAcessorio);
        // await axios.delete(
        //   `http://localhost:3010/deletar-acessorio/${dadosAcessorios.idAcessorio}`
        // );

        // // Mensagem de sucesso
        // toast.success("Acessório excluído com sucesso!!", {
        //   position: "bottom-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        // await delay(3.5);
        // buscaAcessorio();
      } else {
        // Mensagem de warning
        toast.warn("Não é possível excluir este acessório", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
            title="Acessorio"
            rota="acessorio"
            dadosAcessorio={dadosAcessorio}
            primeiraColuna="Nome"
            atualizaAcessorio={buscaAcessorio}
            excluirAcessorio={excluirAcessorio}
          />
        </DivContentCadastros>
        <ToastContainer />
      </Body>
    </>
  );
}

export default Acessorios;
