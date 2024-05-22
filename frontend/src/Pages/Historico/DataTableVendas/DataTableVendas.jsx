import * as React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "lottie-react";
import AnimationData from "../../../assets/lottieAnimations/AnimationNotFound.json";

import {
  DataGridCustom,
  DivTable,
  SectionSearch,
  DivPrimaria,
  DivSecundaria,
  DivTerciaria,
  Title,
  ButtonCustom,
} from "./DataTableVendasStyle";

function DataTableVendas(props) {
  const [rowSelectCar, setRowSelectCar] = React.useState();

  const handleRowSelectionChange = async (newSelection) => {
    if (newSelection && newSelection.length > 0) {
      const selectRow = props.rowsSellCars.find(
        (row) => row.id === newSelection[0]
      );
      setRowSelectCar(selectRow);
      console.log(selectRow);
    }
  };

  const ExtornarVenda = async () => {
    try {
      await axios.delete(
        `http://localhost:3010/deletar-venda/${rowSelectCar.id}`
      );
      toast.success("Venda extornada com sucesso!!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
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
      <DivTable>
        <SectionSearch>
          <DivPrimaria></DivPrimaria>
          <DivSecundaria>
            <Title>Histórico de Vendas</Title>
          </DivSecundaria>
          <DivTerciaria>
            <ButtonCustom key="detalhes" variant="contained">
              Detalhes
            </ButtonCustom>
            <ButtonCustom
              key="extornar"
              variant="outlined"
              onClick={() => {
                ExtornarVenda();
              }}
            >
              Extornar
            </ButtonCustom>
          </DivTerciaria>
        </SectionSearch>
        <div
          style={{
            height: "80%",
            width: "80%",
          }}
        >
          {props.rowsSellCars.length > 0 ? (
            <DataGridCustom
              rows={props.rowsSellCars}
              columns={props.columnsCars}
              onRowSelectionModelChange={handleRowSelectionChange}
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
          ) : (
            <div
              style={{
                backgroundColor: "#2f2841",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px 5px 30px 30px",
              }}
            >
              <Lottie
                animationData={AnimationData}
                style={{
                  height: 300,
                  width: 300,
                }}
              />
            </div>
          )}
        </div>
      </DivTable>
      <ToastContainer />
    </>
  );
}

export default DataTableVendas;
