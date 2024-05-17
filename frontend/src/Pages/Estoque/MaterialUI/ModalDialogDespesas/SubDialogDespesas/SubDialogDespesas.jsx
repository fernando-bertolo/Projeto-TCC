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
  const [userLogged, setUserLogged] = React.useState();

  React.useEffect(() => {
    axios
      .get("http://localhost:3010/", {
        headers: {
          Authorization: localStorage.getItem("@TokenUsuario"),
        },
      })
      .then((response) => {
        if (localStorage.getItem("@TokenUsuario")) {
          setUserLogged(response.data.nome);
        } else {
          setUserLogged("Error");
        }
      });
  }, []);

  return (
    <React.Fragment>
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
            <h3>Cadastro de Despesas</h3>
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
                //value={props.fieldInputsCars.ano}
                // onChange={(event) => {
                // props.setfieldInputsCars({
                //     ...props.fieldInputsCars,
                //     ano: event.target.value,
                // });
                // }}
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
                    //value={props.fieldInputsCars.ano}
                    // onChange={(event) => {
                    // props.setfieldInputsCars({
                    //     ...props.fieldInputsCars,
                    //     ano: event.target.value,
                    // });
                    // }}
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
                    value={userLogged}
                    sx={{ width: 250, color: "#FFF" }}
                    //value={props.fieldInputsCars.ano}
                    // onChange={(event) => {
                    // props.setfieldInputsCars({
                    //     ...props.fieldInputsCars,
                    //     ano: event.target.value,
                    // });
                    // }}
                  />
                </FormControl>
              </div>
            </div>

            <TextArea
              name=""
              id=""
              placeholder="Insira uma descrição"
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
                //value={props.fieldInputsCars.ano}
                // onChange={(event) => {
                // props.setfieldInputsCars({
                //     ...props.fieldInputsCars,
                //     ano: event.target.value,
                // });
                // }}
              />
            </FormControl>
          </Box>
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "#2f2841" }}>
          <Button
            type="submit"
            autoFocus
            //   onClick={(event) => {
            //     sendDataCars(event);
            //   }}
          >
            Salvar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default SubDialogDespesas;
