import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Delay from "../../../../Services/Delay/Delay";
import Loading from "../../../../Components/Loading/Loading";

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

function ModalDialogVendas(props) {
  const [dataCustomer, setDataCustomer] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    cpf: "",
    dataVenda: "",
    valorVenda: "",
  });
  const [userLoggedID, setUserLoggedID] = React.useState();

  function buscaUsuarioLogado() {
    try {
      axios
        .get("http://localhost:3010/", {
          headers: {
            Authorization: localStorage.getItem("@TokenUsuario"),
          },
        })
        .then((response) => {
          if (localStorage.getItem("@TokenUsuario")) {
            setUserLoggedID(response.data.idUsuario);
          } else {
            setUserLoggedID("Error");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    buscaUsuarioLogado();
  }, []);

  const getDataCustomer = async () => {
    try {
      setIsLoading(true);
      await Delay(2);
      setIsLoading(false);
      await axios
        .get(`http://localhost:3010/cliente-cpf/${inputs.cpf}`)
        .then((response) => {
          setDataCustomer(response.data);
        });
      console.log(dataCustomer);
    } catch (error) {
      console.log(error);
      if (
        error.response ||
        error.response.status === 400 ||
        error.response.status === 404
      ) {
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

  function formatDate(dateString) {
    const date = new Date(dateString);
    let day = date.getDate() + 1;
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (day < 9) day = `0${day}`;
    if (month < 9) month = `0${month}`;
    return `${day}-${month}-${year}`;
  }

  const formattedDate = dataCustomer.dataNascimento
    ? formatDate(dataCustomer.dataNascimento)
    : "";

  const SendDataSell = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3010/criacao-venda", {
        idVeiculo: props.dataCar.id,
        idUsuario: userLoggedID,
        idCliente: dataCustomer.id,
        valorVenda: inputs.valorVenda,
        dataVenda: inputs.dataVenda,
      });

      toast.success("Veículo vendido!!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      props.handleClickCloseVendas();
    } catch (error) {
      console.log(error);
      if (
        error.response ||
        error.response.status === 400 ||
        error.response.status === 404
      ) {
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
      <BootstrapDialog
        onClose={props.handleClickCloseVendas}
        aria-labelledby="customized-dialog-title"
        open={props.openVendas}
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
              onClick={props.handleClickCloseVendas}
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
            <h3>Venda</h3>
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
          ></div>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#2f2841" }} dividers>
          <div
            style={{
              width: "100%",
              height: "10%",
              //backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                width: "60%",
                //backgroundColor: "pink",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <FormControl variant="standard">
                <InputLabel htmlFor="cpf" style={{ color: "#FFF" }}>
                  Insira o CPF do cliente
                </InputLabel>
                <Input
                  type="text"
                  id="cpf"
                  required
                  value={inputs.cpf}
                  onChange={(event) => {
                    setInputs({
                      ...inputs,
                      cpf: event.target.value,
                    });
                  }}
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>
            </div>

            <div
              style={{
                width: "30%",
                //backgroundColor: "green",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="button"
                autoFocus
                variant="outlined"
                onClick={getDataCustomer}
              >
                Pesquisar
              </Button>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "calc(75% - 1rem)",
              //backgroundColor: "green",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                //backgroundColor: "orange",
                gap: "2rem",
                paddingTop: "1rem",
              }}
            >
              <FormControl variant="standard">
                <Input
                  type="text"
                  id="nome"
                  required
                  placeholder="Nome"
                  value={dataCustomer.nome}
                  readOnly
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>
              <FormControl variant="standard">
                <Input
                  type="text"
                  id="endereco"
                  placeholder="Endereço"
                  value={dataCustomer.endereco}
                  required
                  readOnly
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>

              <FormControl variant="standard">
                <Input
                  type="text"
                  id="bairro"
                  required
                  placeholder="Bairro"
                  readOnly
                  value={dataCustomer.bairro}
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>

              <FormControl variant="standard">
                <Input
                  type="text"
                  id="cep"
                  required
                  placeholder="CEP"
                  readOnly
                  value={dataCustomer.cep}
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                //backgroundColor: "pink",
                gap: "2rem",
              }}
            >
              <FormControl variant="standard">
                <Input
                  type="text"
                  id="rg"
                  required
                  placeholder="RG"
                  value={dataCustomer.rg}
                  readOnly
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>

              <FormControl variant="standard">
                <Input
                  type="text"
                  id="email"
                  required
                  placeholder="E-mail"
                  value={dataCustomer.email}
                  readOnly
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>

              <FormControl variant="standard">
                <Input
                  type="text"
                  id="celular"
                  required
                  placeholder="Celular"
                  readOnly
                  value={dataCustomer.celular}
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>

              <FormControl variant="standard">
                <Input
                  type="text"
                  id="dataNascimento"
                  required
                  placeholder="Data de Nascimento"
                  value={formattedDate}
                  readOnly
                  sx={{ width: 250, color: "#FFF" }}
                />
              </FormControl>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: "1rem",
              //backgroundColor: "blue",
            }}
          >
            <FormControl variant="standard">
              <InputLabel
                htmlFor="dataVenda"
                style={{ color: "#FFF" }}
              ></InputLabel>
              <Input
                type="date"
                id="dataVenda"
                required
                value={inputs.dataVenda}
                onChange={(event) => {
                  setInputs({
                    ...inputs,
                    dataVenda: event.target.value,
                  });
                }}
                sx={{ width: 250, color: "#FFF" }}
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="valorVenda" style={{ color: "#FFF" }}>
                Valor da Venda
              </InputLabel>
              <Input
                type="text"
                id="valorVenda"
                required
                value={inputs.valorVenda}
                onChange={(event) => {
                  setInputs({
                    ...inputs,
                    valorVenda: event.target.value,
                  });
                }}
                sx={{ width: 250, color: "#FFF" }}
              />
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#2f2841" }}>
          <Button
            type="submit"
            autoFocus
            onClick={(event) => {
              SendDataSell(event);
            }}
          >
            Vender
          </Button>
        </DialogActions>
        <ToastContainer />
        {isLoading && <Loading />}
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default ModalDialogVendas;
