import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Delay from "../../../../Services/Delay/Delay";
import { DataGridCustom } from "./DialogDespesasMUIStyle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const columnsDespesa = [
  {
    field: "Data",
    headerName: "Data",
    width: 160,
  },
  { field: "Titulo", headerName: "Titulo", width: 160 },
  { field: "responsavel", headerName: "Responsável", width: 160 },
  //{ field: "descricao", headerName: "descricao", width: 160 },
  { field: "valor", headerName: "valor", width: 160 },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-root": {},
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
    //width: 900,
    height: 450,
    backgroundColor: "red",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

function DialogDespesas(props) {
  const [dadosDespesa, setDadosDespesa] = React.useState([]);

  const buscaDespesaIdVeiculo = async () => {
    await axios
      .get(`http://localhost:3010/visualizar-despesa/${props.dataCar.id}`)
      .then((response) => {
        setDadosDespesa(response.data);
      });
  };

  React.useEffect(() => {
    buscaDespesaIdVeiculo();
  }, [props.dataCar]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const rowsDespesa = dadosDespesa.map((dadosDespesa) => {
    const formattedDate = dadosDespesa.Data
      ? formatDate(dadosDespesa.Data)
      : "";
    console.log(formatDate);
    return {
      id: dadosDespesa.idDespesa,
      Data: formattedDate,
      Titulo: dadosDespesa.Titulo,
      descricao: dadosDespesa.descricao,
      responsavel: dadosDespesa.Usuario.nome,
      valor: dadosDespesa.valor,
    };
  });

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={props.handleClickCloseDespesas}
        aria-labelledby="customized-dialog-title"
        open={props.openDespesas}
      >
        <DialogTitle
          sx={{
            paddingTop: 1,
            paddingBottom: 1,
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2f2841",
          }}
          id="customized-dialog-title"
        >
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              //backgroundColor: "red",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={props.handleClickCloseDespesas}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              {/* <CloseIcon /> */}X
            </IconButton>
          </div>

          <div
            style={{
              //backgroundColor: "blue",
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            teste
          </div>

          <div
            style={{
              //backgroundColor: "pink",
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGroup size="small" aria-label="Small button group">
              <Button key="Criar">Criar</Button>
              <Button key="Editar">Editar</Button>
              <Button key="Excluir">Excluir</Button>
            </ButtonGroup>
          </div>
        </DialogTitle>
        <DialogContent>
          <DataGridCustom
            rows={rowsDespesa}
            columns={columnsDespesa}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            checkboxSelection
            style={{
              color: "#fff",
              border: "none",
              //width: 600,
            }}
          />

          {/* <button
            onClick={() => {
              console.log(dadosDespesa);
            }}
          >
            teste
          </button> */}
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#2f2841" }}></DialogActions>
      </BootstrapDialog>
      <ToastContainer />
    </React.Fragment>
  );
}

export default DialogDespesas;
