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

const columnsDespesa = [
  { field: "Data", headerName: "Data", width: 160 },
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

  const rowsDespesa = dadosDespesa.map((dadosDespesa) => ({
    id: dadosDespesa.idDespesa,
    Data: dadosDespesa.Data,
    Titulo: dadosDespesa.Titulo,
    descricao: dadosDespesa.descricao,
    responsavel: dadosDespesa.Usuario.nome,
    valor: dadosDespesa.valor,
  }));

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={props.handleClickCloseDespesas}
        aria-labelledby="customized-dialog-title"
        open={props.openDespesas}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2f2841",
          }}
          id="customized-dialog-title"
        ></DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.handleClickCloseDespesas}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}X
        </IconButton>
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
