import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";
import BotoesListagem from "../Buttons/ButtonMUI";
import InputsMUI from "../InputMUI/InputsMUI";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ModalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [fieldInputsCars, setfieldInputsCars] = React.useState({
    ano: "",
    placa: "",
    combustivel: "",
    cor: "",
    quilometragem: "",
    valor: "",
    acessorios: [{}],
  });

  const [fieldSelectCarsUnique, setfieldSelectCarsUnique] = React.useState({
    marca: "",
    modelo: "",
    versao: "",
  });

  const sendDataCars = async (event) => {
    event.preventDefault();
    try {
      console.log(fieldSelectCarsUnique);
      console.log(fieldInputsCars);

      // Enviando os dados para a rota /criacao-usuario
      await axios.post("http://localhost:3010/criacao-veiculos", {
        idMarca: fieldSelectCarsUnique.marca,
        idModelo: fieldSelectCarsUnique.modelo,
        idVersao: fieldSelectCarsUnique.versao,
        idStatus: 1, //true => Veículo disponível
        ano: fieldInputsCars.ano,
        combustivel: fieldInputsCars.combustivel,
        cor: fieldInputsCars.cor,
        quilometragem: fieldInputsCars.quilometragem,
        valor: fieldInputsCars.valor,
        placa: fieldInputsCars.placa,
        idAcessorios: fieldInputsCars.acessorios,
      });

      // Mensagem de sucesso
      toast.success("Veículo criado com sucesso", {
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
    <React.Fragment>
      <BotoesListagem handleClickOpen={handleClickOpen} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="customized-dialog-title"
        >
          Cadastro de Veículo
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}X
        </IconButton>
        <DialogContent dividers>
          <InputsMUI
            setfieldInputsCars={setfieldInputsCars}
            fieldInputsCars={fieldInputsCars}
            setfieldSelectCarsUnique={setfieldSelectCarsUnique}
            fieldSelectCarsUnique={fieldSelectCarsUnique}
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            autoFocus
            onClick={(event) => {
              sendDataCars(event);
            }}
          >
            Salvar
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <ToastContainer />
    </React.Fragment>
  );
}

export default ModalDialog;
