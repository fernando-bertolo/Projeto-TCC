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
import ButtonGroup from "@mui/material/ButtonGroup";
import Lottie from "lottie-react";
import animationData from "../../../../assets/lottieAnimations/AnimationNotFound.json";
import SubDialogDespesas from "./SubDialogDespesas/SubDialogDespesas";

const columnsDespesa = [
  {
    field: "Data",
    headerName: "Data",
    width: 210,
  },
  { field: "Titulo", headerName: "Titulo", width: 210 },
  { field: "responsavel", headerName: "Responsável", width: 210 },
  //{ field: "descricao", headerName: "descricao", width: 160 },
  { field: "valor", headerName: "Valor", width: 220 },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: 900,
    maxWidth: "none",
    borderRadius: 30,
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
    width: 900,
    height: 600,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

function DialogDespesas(props) {
  const [dadosDespesa, setDadosDespesa] = React.useState([]);
  const [rowSelectDespesa, setRowSelectDespesa] = React.useState();

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
    if (month < 9) return `${day}-0${month}-${year}`;
    return `${day}-${month}-${year}`;
  }

  const rowsDespesa = dadosDespesa.map((dadosDespesa) => {
    const formattedDate = dadosDespesa.Data
      ? formatDate(dadosDespesa.Data)
      : "";
    //console.log(formatDate);
    return {
      id: dadosDespesa.idDespesa,
      Data: formattedDate,
      Titulo: dadosDespesa.Titulo,
      descricao: dadosDespesa.descricao,
      responsavel: dadosDespesa.Usuario.nome,
      valor: dadosDespesa.valor,
    };
  });

  const [openSubDialog, setOpenSubDialog] = React.useState(false);
  const [openEditSubDialog, setOpenEditSubDialog] = React.useState(false);

  const handleOpenSubDialog = () => {
    setOpenSubDialog(true);
  };

  const handleCloseSubDialog = () => {
    setOpenSubDialog(false);
  };

  const handleOpenEditSubDialog = () => {
    setOpenEditSubDialog(true);
  };

  const handleCloseEditSubDialog = () => {
    setOpenEditSubDialog(false);
  };

  const handleRowSelectionChangeDespesa = async (newSelection) => {
    if (newSelection && newSelection.length > 0) {
      const selectRow = rowsDespesa.find((row) => row.id === newSelection[0]);
      setRowSelectDespesa(selectRow);
      console.log(selectRow);
    }
  };

  const exclusaoDespesa = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(
        `http://localhost:3010/exclusao-despesa/${rowSelectDespesa.id}`
      );

      toast.success("Despesa excluída com sucesso!!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      await Delay(3);
      buscaDespesaIdVeiculo();
    } catch (error) {
      if (
        (error.response && error.response.status === 400) ||
        (error.response && error.response.status === 500)
      ) {
        toast.error(error.response.data.Error, {
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
              width: "30%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              //backgroundColor: "red",
              paddingLeft: "1rem",
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
              flexDirection: "column",
              color: "#FFF",
            }}
          >
            <h3>Despesa</h3>
            <p>
              {props.dataCar.nomeMarca} {props.dataCar.nomeModelo}{" "}
              {props.dataCar.nomeVersao}
            </p>
          </div>

          <div
            style={{
              //backgroundColor: "pink",
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGroup size="small" aria-label="Small button group">
              <Button
                key="Criar"
                onClick={() => {
                  handleOpenSubDialog();
                }}
              >
                Criar
              </Button>
              <Button
                key="Editar"
                onClick={() => {
                  handleOpenEditSubDialog();
                }}
              >
                Editar
              </Button>
              <Button
                key="Excluir"
                onClick={(event) => {
                  exclusaoDespesa(event);
                }}
              >
                Excluir
              </Button>
            </ButtonGroup>
          </div>
        </DialogTitle>

        <DialogContent>
          {rowsDespesa.length > 0 ? (
            <DataGridCustom
              rows={rowsDespesa}
              columns={columnsDespesa}
              onRowSelectionModelChange={handleRowSelectionChangeDespesa}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              checkboxSelection
              style={{
                color: "#fff",
                border: "none",
                borderRadius: 0,
                //width: 600,
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
              }}
            >
              <Lottie
                animationData={animationData}
                style={{ height: 300, width: 300 }}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#2f2841" }}></DialogActions>
      </BootstrapDialog>
      <ToastContainer />

      <SubDialogDespesas
        handleOpenSubDialog={handleOpenSubDialog}
        handleCloseSubDialog={handleCloseSubDialog}
        openSubDialog={openSubDialog}
        teste={props.handleClickCloseDespesas}
        dataCar={props.dataCar}
        buscaDespesaIdVeiculo={buscaDespesaIdVeiculo}
        modo="criacao"
        title="Cadastro de Despesa"
      />
      {rowSelectDespesa && (
        <SubDialogDespesas
          handleOpenEditSubDialog={handleOpenEditSubDialog}
          handleCloseEditSubDialog={handleCloseEditSubDialog}
          openEditSubDialog={openEditSubDialog}
          teste={props.handleClickCloseDespesas}
          dataCar={props.dataCar}
          buscaDespesaIdVeiculo={buscaDespesaIdVeiculo}
          modo="edicao"
          title="Alteração de Despesa"
          rowSelectDespesa={rowSelectDespesa}
        />
      )}
    </React.Fragment>
  );
}

export default DialogDespesas;
