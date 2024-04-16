import Menu from "../../Components/Menu/index.jsx";
import Listagem from "../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../Components/BodyPages/style.jsx";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function Estoque() {
  const [dadosVeiculos, setDadosVeiculos] = useState();

  const buscaVeiculos = async () => {
    try {
      const response = await axios
        .get("http://localhost:3010/visualizar-veiculo")
        .then((response) => {
          setDadosVeiculos(response.data);
        });

      console.log(response);
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
    buscaVeiculos();
  }, []);

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <Listagem
            title="Estoque"
            rota="veiculo"
            dadosVeiculos={dadosVeiculos}
            atualizaVeiculos={buscaVeiculos}
            marca="Marca"
            modelo="Modelo"
            versao="Versão"
            ano="Ano"
            combustivel="Combustível"
            quilometragem="Quilometragem"
            cor="Cor"
            placa="Placa"
            valor="Valor"
            idStatus="Status"
          />
          <ToastContainer />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Estoque;
