import Menu from "../../Components/Menu/index.jsx";
import Listagem from "../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../Components/BodyPages/style.jsx";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTableMUI from "./MaterialUI/DataTables/DataTableMUI";

const columnsCars = [
  { field: "nomeMarca", headerName: "Marca", width: 150 },
  { field: "nomeModelo", headerName: "Modelo", width: 150 },
  { field: "nomeVersao", headerName: "Versão", width: 150 },
  { field: "ano", headerName: "Ano", width: 80 },
  { field: "cor", headerName: "Cor", width: 100 },
  { field: "quilometragem", headerName: "Quilometragem", width: 120 },
  { field: "placa", headerName: "Placa", width: 150 },
  { field: "valor", headerName: "Valor", width: 150 },
  { field: "idStatus", headerName: "idStatus", width: 150 },
];

function Estoque() {
  const [dadosVeiculos, setDadosVeiculos] = useState([]);

  const buscaVeiculos = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-veiculo")
        .then((response) => {
          setDadosVeiculos(response.data);
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
    buscaVeiculos();
  }, []);

  const rowsCars = dadosVeiculos.map((cars) => ({
    id: cars.idVeiculo,
    nomeMarca: cars.Marca.nomeMarca,
    nomeModelo: cars.Modelo.nomeModelo,
    nomeVersao: cars.Verso.nomeVersao,
    ano: cars.ano,
    combustivel: cars.combustivel,
    cor: cars.cor,
    quilometragem: cars.quilometragem,
    valor: cars.valor,
    placa: cars.placa,
    acessorios: cars.acessorios,
  }));

  return (
    <>
      <Body>
        <Menu />
        {/* <Listagem
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
          /> */}

        <DataTableMUI rows={rowsCars} columns={columnsCars} />
        <ToastContainer />
      </Body>
    </>
  );
}

export default Estoque;
