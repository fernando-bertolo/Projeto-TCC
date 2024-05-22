import React from "react";
import { Body } from "../../Components/BodyPages/style";
import Menu from "../../Components/Menu";
import axios from "axios";
import DataTableVendas from "./DataTableVendas/DataTableVendas";

const columnsSellCars = [
  { field: "dataVenda", headerName: "Data da Venda", width: 120 },
  { field: "nomeMarca", headerName: "Marca", width: 120 },
  { field: "nomeModelo", headerName: "Modelo", width: 120 },
  { field: "nomeVersao", headerName: "Versão", width: 120 },
  { field: "ano", headerName: "Ano", width: 120 },
  { field: "placa", headerName: "Placa", width: 120 },
  { field: "responsavel", headerName: "Responsável", width: 150 },
  { field: "nomeCliente", headerName: "Nome do Cliente", width: 150 },
  { field: "valorVenda", headerName: "Valor da Venda", width: 146 },
];

function Historico() {
  const [sellCar, setSellCar] = React.useState([]);

  const GetDataSellCars = async () => {
    try {
      const response = await axios
        .get("http://localhost:3010/visualizar-venda")
        .then((response) => {
          setSellCar(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    GetDataSellCars();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const rowsSellCars = sellCar.map((cars) => {
    const formattedDate = cars.dataVenda ? formatDate(cars.dataVenda) : "";

    return {
      id: cars.idVenda,
      dataVenda: formattedDate,
      nomeMarca: cars.Veiculo.Marca.nomeMarca,
      nomeModelo: cars.Veiculo.Marca.Modelos[0].nomeModelo,
      nomeVersao: cars.Veiculo.Marca.Modelos[0].Versoes[0].nomeVersao,
      ano: cars.Veiculo.ano,
      placa: cars.Veiculo.placa,
      responsavel: cars.Usuario.nome,
      nomeCliente: cars.Cliente.nome,
      valorVenda: cars.valorVenda,
    };
  });

  return (
    <>
      <Body>
        <Menu />
        <DataTableVendas
          rowsSellCars={rowsSellCars}
          columnsCars={columnsSellCars}
        />
      </Body>
    </>
  );
}

export default Historico;
