import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";
import InputsMUI from "../InputMUI/InputsMUI";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Delay from "../../../../Services/Delay/Delay";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    //width: 900,
    maxWidth: "none",
    borderRadius: 30,
    height: 700,
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

function ModalDialog(props) {
  const [veiculo, setVeiculo] = React.useState();

  const buscaVeiculos = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-veiculo")
        .then((response) => {
          setVeiculo(response.data);
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

  console.log(props.modo);

  const [fieldInputsCars, setfieldInputsCars] = React.useState({
    ano: "",
    placa: "",
    combustivel: "",
    cor: "",
    quilometragem: "",
    valor: "",
    status: "",
  });

  React.useEffect(() => {
    if (props.modo === "edicao" && props.dataCar) {
      setfieldInputsCars({
        ano: props.dataCar.ano,
        placa: props.dataCar.placa,
        combustivel: props.dataCar.combustivel,
        cor: props.dataCar.cor,
        quilometragem: props.dataCar.quilometragem,
        valor: props.dataCar.valor,
      });
    }
  }, [props.dataCar, props.modo]);

  const [fieldSelectCarsUnique, setfieldSelectCarsUnique] = React.useState({
    marca: "",
    modelo: "",
    versao: "",
    acessorios: [{}],
  });

  const sendDataCars = async (event) => {
    event.preventDefault();
    try {
      if (props.modo === "criacao") {
        if (
          fieldInputsCars.acessorios === "" ||
          fieldInputsCars.ano === "" ||
          fieldInputsCars.combustivel === "" ||
          fieldInputsCars.cor === "" ||
          fieldInputsCars.placa === "" ||
          fieldInputsCars.quilometragem === "" ||
          fieldInputsCars.valor === ""
        ) {
          toast.warn("Por favor, preencha os campos corretamente !!", {
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
          // Enviando os dados para a rota /criacao-veiculos
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
            idAcessorios: fieldSelectCarsUnique.acessorios,
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
          await Delay(3.5);
          buscaVeiculos();
          props.handleClose(false);
        }
      } else if (props.modo === "edicao") {
        if (
          fieldInputsCars.acessorios === "" ||
          fieldInputsCars.ano === "" ||
          fieldInputsCars.combustivel === "" ||
          fieldInputsCars.cor === "" ||
          fieldInputsCars.placa === "" ||
          fieldInputsCars.quilometragem === "" ||
          fieldInputsCars.valor === ""
        ) {
          toast.warn("Por favor, preencha os campos corretamente !!", {
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
          // Enviando os dados para a rota /alteracao-veiculo
          await axios.put(
            `http://localhost:3010/alteracao-veiculo/${props.dataCar.id}`,
            {
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
              idAcessorios: fieldSelectCarsUnique.acessorios,
            }
          );

          // Mensagem de sucesso
          toast.success("Veículo alterado com sucesso", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          await Delay(3.5);
          buscaVeiculos();
          props.handleCloseEdit(false);
        }
      }
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

  React.useEffect(() => {
    buscaVeiculos();
  }, []);

  return (
    <React.Fragment>
      {props.modo === "criacao" ? (
        <BootstrapDialog
          onClose={props.handleClose}
          aria-labelledby="customized-dialog-title"
          open={props.open}
        >
          <DialogTitle
            sx={{
              m: 0,
              p: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2f2841",
              color: "#FFF",
            }}
            id="customized-dialog-title"
          >
            {props.title}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={props.handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            {/* <CloseIcon /> */}X
          </IconButton>
          <DialogContent
            dividers
            sx={{ backgroundColor: "#2f2841", color: "#FFF"}}
          >
            <InputsMUI
              setfieldInputsCars={setfieldInputsCars}
              fieldInputsCars={fieldInputsCars}
              setfieldSelectCarsUnique={setfieldSelectCarsUnique}
              fieldSelectCarsUnique={fieldSelectCarsUnique}
              modo="criacao"
            />
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "#2f2841", color: "#FFF" }}>
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
      ) : props.modo === "edicao" && props.dataCar ? (
        <BootstrapDialog
          onClose={props.handleCloseEdit}
          aria-labelledby="customized-dialog-title"
          open={props.editOpen}
        >
          <DialogTitle
            sx={{
              m: 0,
              p: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2f2841",
              color: "#FFF",
            }}
            id="customized-dialog-title"
          >
            {props.title}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={props.handleCloseEdit}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            {/* <CloseIcon /> */}X
          </IconButton>

          <DialogContent
            dividers
            sx={{ backgroundColor: "#2f2841", color: "#FFF" }}
          >
            <InputsMUI
              setfieldInputsCars={setfieldInputsCars}
              fieldInputsCars={fieldInputsCars}
              setfieldSelectCarsUnique={setfieldSelectCarsUnique}
              fieldSelectCarsUnique={fieldSelectCarsUnique}
              modo="edicao"
              dataCar={props.dataCar}
            />
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "#2f2841" }}>
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
      ) : (
        <></>
      )}
      <ToastContainer />
    </React.Fragment>
  );
}

export default ModalDialog;
