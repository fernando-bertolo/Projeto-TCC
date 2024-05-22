import React from "react";
import { Body } from "../../Components/BodyPages/style";
import Menu from "../../Components/Menu";
import { DataGridCustom } from "./style";
import axios from "axios";

const columnsCars = [
  { field: "nomeMarca", headerName: "Marca", width: 160 },
  { field: "nomeModelo", headerName: "Modelo", width: 160 },
  { field: "nomeVersao", headerName: "Versão", width: 160 },
  { field: "ano", headerName: "Ano", width: 160 },
  { field: "cor", headerName: "Cor", width: 160 },
  { field: "quilometragem", headerName: "Quilometragem", width: 160 },
  { field: "placa", headerName: "Placa", width: 160 },
  { field: "valor", headerName: "Valor", width: 146 },
];

function Historico() {
  const [sellCar, setSellCar] = React.useState([]);

  const GetDataSellCars = async () => {
    try {
      const response = await axios
        .get("http://localhost:3010/visualizar-veiculo-vendido")
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

  const rowsSellCars = sellCar.map((cars) => ({
    id: cars.idVeiculo,
    ano: cars.ano,
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
        <DataGridCustom
          rows={rowsSellCars}
          columns={columnsCars}
          //onRowSelectionModelChange={handleRowSelectionChange}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          checkboxSelection
          style={{
            borderRadius: "10px 10px 10px 10px",
            color: "#fff",
            border: "none",
          }}
        />
      </Body>
    </>
  );
}

export default Historico;
