import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  DivTable,
  SectionSearch,
  DivPrimaria,
  DivSecundaria,
  DivTerciaria,
  Title,
  SectionNavigator,
} from "./DataTableMUIStyles";
import ModalDialog from "../ModalDialog/DialogMUI";
import Button from "@mui/material/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function DataTableMUI(props) {
  const [rowSelectCar, setRowSelectCar] = React.useState();

  const handleRowSelectionChange = async (newSelection) => {
    if (newSelection && newSelection.length > 0) {
      const selectRow = props.rows.find((row) => row.id === newSelection[0]);
      setRowSelectCar(selectRow);
    }
  };

  const deleteCar = async () => {
    try {
      await axios.delete(
        `http://localhost:3010/deletar-veiculo/${rowSelectCar.id}`
      );

      // Mensagem de sucesso
      toast.success("Veículo excluído com sucesso!!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DivTable>
        <SectionNavigator>
          <Button variant="contained" href="#">
            Despesas
          </Button>
          <Button variant="outlined" href="#">
            Vendas
          </Button>
        </SectionNavigator>
        <SectionSearch>
          <DivPrimaria></DivPrimaria>
          <DivSecundaria>
            <Title>Estoque</Title>
          </DivSecundaria>
          <DivTerciaria>
            <ModalDialog
              setDadosVeiculos={props.setDadosVeiculos}
              deleteCar={deleteCar}
            ></ModalDialog>
          </DivTerciaria>
        </SectionSearch>
        <div
          style={{
            height: "80%",
            width: "80%",
          }}
        >
          <DataGrid
            rows={props.rows}
            columns={props.columns}
            onRowSelectionModelChange={handleRowSelectionChange}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            checkboxSelection
            style={{
              borderRadius: 10,
              backgroundColor: "#FFF",
              color: "black",
            }}
          />
        </div>
        <ToastContainer />
      </DivTable>
    </>
  );
}

export default DataTableMUI;
