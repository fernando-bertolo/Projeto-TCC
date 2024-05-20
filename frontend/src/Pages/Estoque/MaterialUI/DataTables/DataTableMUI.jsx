import * as React from "react";
//import { DataGrid } from "@mui/x-data-grid";
import {
  DataGridCustom,
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
import BotoesListagem from "../Buttons/ButtonMUI";
import DialogDespesas from "../ModalDialogDespesas/DialogDespesasMUI";
import Lottie from "lottie-react";
import animationData from "../../../../assets/lottieAnimations/AnimationNotFound.json";

function DataTableMUI(props) {
  const [rowSelectCar, setRowSelectCar] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [openDespesas, setOpenDespesas] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEditOpen = () => {
    setEditOpen(true);
  };
  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  const handleClickOpenDespesas = () => {
    setOpenDespesas(true);
  };

  const handleClickCloseDespesas = () => {
    setOpenDespesas(false);
  };

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
        <SectionNavigator>
          <Button
            variant="contained"
            href="#"
            key="Despesas"
            onClick={() => {
              handleClickOpenDespesas(true);
            }}
          >
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
            <BotoesListagem
              handleClickOpen={handleClickOpen}
              handleClickEditOpen={handleClickEditOpen}
              deleteCar={deleteCar}
            />
          </DivTerciaria>
        </SectionSearch>
        <div
          style={{
            height: "80%",
            width: "80%",
          }}
        >
          {props.rows.length > 0 ? (
            <DataGridCustom
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
                animationData={animationData}
                style={{ height: 300, width: 300 }}
              />
            </div>
          )}
        </div>
        <ToastContainer />
      </DivTable>

      <ModalDialog
        setDadosVeiculos={props.setDadosVeiculos}
        deleteCar={deleteCar}
        handleClose={handleClose}
        open={open}
        modo="criacao"
        title="Cadastro de Veículos"
      />

      {rowSelectCar && (
        <ModalDialog
          setDadosVeiculos={props.setDadosVeiculos}
          deleteCar={deleteCar}
          handleCloseEdit={handleCloseEdit}
          editOpen={editOpen}
          modo="edicao"
          title="Alteração de Veículos"
          dataCar={rowSelectCar}
        />
      )}

      {rowSelectCar && (
        <DialogDespesas
          handleClickCloseDespesas={handleClickCloseDespesas}
          openDespesas={openDespesas}
          dataCar={rowSelectCar}
        />
      )}
    </>
  );
}

export default DataTableMUI;
