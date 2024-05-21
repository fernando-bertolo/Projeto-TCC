import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { TextArea } from "./SubDialogDespesasStyle";
import Button from "@mui/material/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Delay from "../../../../../Services/Delay/Delay";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: 800,
    maxWidth: "none",
    borderRadius: 30,
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
    height: 600,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

function SubDialogDespesas(props) {
  const [userLoggedName, setUserLoggedName] = React.useState();
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
            setUserLoggedName(response.data.nome);
            setUserLoggedID(response.data.idUsuario);
          } else {
            setUserLoggedName("Error");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    buscaUsuarioLogado();
  }, []);

  const [inputSubDialogDespesas, setInputSubDialogDespesas] = React.useState({
    Titulo: props.modo === "edicao" ? props.rowSelectDespesa.Titulo : "",
    Data: props.modo === "edicao" ? props.rowSelectDespesa.Data : "",
    descricao: props.modo === "edicao" ? props.rowSelectDespesa.descricao : "",
    valor: props.modo === "edicao" ? props.rowSelectDespesa.valor : "",
  });

  React.useEffect(() => {
    if (props.modo === "edicao" && props.rowSelectDespesa) {
      setInputSubDialogDespesas({
        Titulo: props.rowSelectDespesa.Titulo,
        Data: props.rowSelectDespesa.Data,
        descricao: props.rowSelectDespesa.descricao,
        valor: props.rowSelectDespesa.valor,
      });
    } else {
      setInputSubDialogDespesas({
        Titulo: "",
        Data: "",
        descricao: "",
        valor: "",
      });
    }
  }, [props.modo, props.rowSelectDespesa]);

  const SendDataDespesas = async (event) => {
    event.preventDefault();
    try {
      if (props.modo === "criacao") {
        await axios.post("http://localhost:3010/criacao-despesa", {
          idVeiculo: props.dataCar.id,
          Titulo: inputSubDialogDespesas.Titulo,
          Data: inputSubDialogDespesas.Data,
          idUsuario: userLoggedID,
          descricao: inputSubDialogDespesas.descricao,
          valor: inputSubDialogDespesas.valor,
        });
        toast.success("Despesa cadastrada com sucesso!!", {
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
        props.handleCloseSubDialog();
        props.buscaDespesaIdVeiculo();
      } else if (props.modo === "edicao") {
        await axios.put(
          `http://localhost:3010/alteracao-despesa/${props.rowSelectDespesa.id}`,
          {
            idVeiculo: props.dataCar.id,
            Titulo: inputSubDialogDespesas.Titulo,
            Data: inputSubDialogDespesas.Data,
            idUsuario: userLoggedID,
            descricao: inputSubDialogDespesas.descricao,
            valor: inputSubDialogDespesas.valor,
          }
        );
        toast.success("Despesa alterada com sucesso!!", {
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
        props.handleCloseEditSubDialog();
        props.buscaDespesaIdVeiculo();
      }
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
      {props.modo === "criacao" ? (
        <BootstrapDialog
          onClose={props.handleCloseSubDialog}
          aria-labelledby="customized-dialog-title"
          open={props.openSubDialog}
        >
          <DialogTitle
            sx={{
              height: 70,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              //borderBottom: "1px solid #FFF",
              backgroundColor: "#2f2841",
              //backgroundColor: "red",
            }}
            id="customized-dialog-title"
          >
            <div
              style={{
                //backgroundColor: "green",
                width: "80%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
              }}
            >
              <h3>{props.title}</h3>
              <h5>
                {props.dataCar.nomeMarca} {props.dataCar.nomeModelo}{" "}
                {props.dataCar.nomeVersao}
              </h5>
            </div>

            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                //backgroundColor: "blue",
                paddingRight: "1rem",
              }}
            >
              <IconButton
                aria-label="close"
                onClick={props.handleCloseSubDialog}
                sx={{
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                {/* <CloseIcon /> */}X
              </IconButton>
            </div>
          </DialogTitle>

          <DialogContent dividers style={{ backgroundColor: "#2f2841" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                //backgroundColor: "red",
              }}
              noValidate
              autoComplete="on"
            >
              <FormControl variant="standard">
                <InputLabel htmlFor="Titulo" sx={{ color: "#FFF" }}>
                  Titulo
                </InputLabel>
                <Input
                  type="text"
                  id="titulo"
                  placeholder="Insira o titulo"
                  required
                  sx={{ width: 250, color: "#FFF" }}
                  value={inputSubDialogDespesas.Titulo}
                  onChange={(event) => {
                    setInputSubDialogDespesas({
                      ...inputSubDialogDespesas,
                      Titulo: event.target.value,
                    });
                  }}
                />
              </FormControl>

              <div
                style={{
                  width: "100%",
                  height: 100,
                  //backgroundColor: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    //backgroundColor: "pink",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControl variant="standard">
                    <InputLabel
                      htmlFor="Titulo"
                      sx={{ color: "#FFF" }}
                    ></InputLabel>
                    <Input
                      type="date"
                      id="Data"
                      required
                      sx={{ width: 250, color: "#FFF" }}
                      value={inputSubDialogDespesas.Data}
                      onChange={(event) => {
                        setInputSubDialogDespesas({
                          ...inputSubDialogDespesas,
                          Data: event.target.value,
                        });
                      }}
                    />
                  </FormControl>
                </div>

                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    //backgroundColor: "orange",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControl variant="standard">
                    <InputLabel htmlFor="responsavel" sx={{ color: "#FFF" }}>
                      Responsável
                    </InputLabel>
                    <Input
                      type="responsavel"
                      id="responsavel"
                      required
                      sx={{ width: 250, color: "#FFF" }}
                      value={userLoggedName}
                    />
                  </FormControl>
                </div>
              </div>

              <TextArea
                name=""
                id=""
                placeholder="Insira uma descrição"
                value={inputSubDialogDespesas.descricao}
                onChange={(event) => {
                  setInputSubDialogDespesas({
                    ...inputSubDialogDespesas,
                    descricao: event.target.value,
                  });
                }}
              ></TextArea>

              <FormControl variant="standard">
                <InputLabel htmlFor="valor" sx={{ color: "#FFF" }}>
                  Valor
                </InputLabel>
                <Input
                  type="text"
                  id="valor"
                  placeholder="Insira o valor"
                  required
                  sx={{ width: 250, color: "#FFF" }}
                  value={inputSubDialogDespesas.valor}
                  onChange={(event) => {
                    setInputSubDialogDespesas({
                      ...inputSubDialogDespesas,
                      valor: event.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>
          </DialogContent>

          <DialogActions sx={{ backgroundColor: "#2f2841" }}>
            <Button
              type="submit"
              autoFocus
              onClick={(event) => {
                SendDataDespesas(event);
              }}
            >
              Salvar
            </Button>
          </DialogActions>
          <ToastContainer />
        </BootstrapDialog>
      ) : props.modo === "edicao" ? (
        <BootstrapDialog
          onClose={props.handleCloseEditSubDialog}
          aria-labelledby="customized-dialog-title"
          open={props.openEditSubDialog}
        >
          <DialogTitle
            sx={{
              height: 70,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              //borderBottom: "1px solid #FFF",
              backgroundColor: "#2f2841",
              //backgroundColor: "red",
            }}
            id="customized-dialog-title"
          >
            <button
              onClick={() => {
                console.log(props.rowSelectDespesa);
              }}
            >
              teste
            </button>
            <div
              style={{
                //backgroundColor: "green",
                width: "80%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
              }}
            >
              <h3>{props.title}</h3>
              <h5>
                {props.dataCar.nomeMarca} {props.dataCar.nomeModelo}{" "}
                {props.dataCar.nomeVersao}
              </h5>
            </div>

            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                //backgroundColor: "blue",
                paddingRight: "1rem",
              }}
            >
              <IconButton
                aria-label="close"
                onClick={props.handleCloseEditSubDialog}
                sx={{
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                {/* <CloseIcon /> */}X
              </IconButton>
            </div>
          </DialogTitle>

          <DialogContent dividers style={{ backgroundColor: "#2f2841" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                //backgroundColor: "red",
              }}
              noValidate
              autoComplete="on"
            >
              <FormControl variant="standard">
                <InputLabel htmlFor="Titulo" sx={{ color: "#FFF" }}>
                  Titulo
                </InputLabel>
                <Input
                  type="text"
                  id="titulo"
                  placeholder="Insira o titulo"
                  required
                  sx={{ width: 250, color: "#FFF" }}
                  value={inputSubDialogDespesas.Titulo}
                  onChange={(event) => {
                    setInputSubDialogDespesas({
                      ...inputSubDialogDespesas,
                      Titulo: event.target.value,
                    });
                  }}
                />
              </FormControl>

              <div
                style={{
                  width: "100%",
                  height: 100,
                  //backgroundColor: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    //backgroundColor: "pink",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControl variant="standard">
                    <InputLabel
                      htmlFor="Titulo"
                      sx={{ color: "#FFF" }}
                    ></InputLabel>
                    <Input
                      type="date"
                      id="Data"
                      required
                      sx={{ width: 250, color: "#FFF" }}
                      value={inputSubDialogDespesas.Data}
                      onChange={(event) => {
                        setInputSubDialogDespesas({
                          ...inputSubDialogDespesas,
                          Data: event.target.value,
                        });
                      }}
                    />
                  </FormControl>
                </div>

                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    //backgroundColor: "orange",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControl variant="standard">
                    <InputLabel htmlFor="responsavel" sx={{ color: "#FFF" }}>
                      Responsável
                    </InputLabel>
                    <Input
                      type="responsavel"
                      id="responsavel"
                      required
                      sx={{ width: 250, color: "#FFF" }}
                      value={userLoggedName}
                    />
                  </FormControl>
                </div>
              </div>

              <TextArea
                name=""
                id=""
                placeholder="Insira uma descrição"
                value={inputSubDialogDespesas.descricao}
                onChange={(event) => {
                  setInputSubDialogDespesas({
                    ...inputSubDialogDespesas,
                    descricao: event.target.value,
                  });
                }}
              ></TextArea>

              <FormControl variant="standard">
                <InputLabel htmlFor="valor" sx={{ color: "#FFF" }}>
                  Valor
                </InputLabel>
                <Input
                  type="text"
                  id="valor"
                  placeholder="Insira o valor"
                  required
                  sx={{ width: 250, color: "#FFF" }}
                  value={inputSubDialogDespesas.valor}
                  onChange={(event) => {
                    setInputSubDialogDespesas({
                      ...inputSubDialogDespesas,
                      valor: event.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>
          </DialogContent>

          <DialogActions sx={{ backgroundColor: "#2f2841" }}>
            <Button
              type="submit"
              autoFocus
              onClick={(event) => {
                SendDataDespesas(event);
              }}
            >
              Salvar
            </Button>
          </DialogActions>
          <ToastContainer />
        </BootstrapDialog>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}

export default SubDialogDespesas;
