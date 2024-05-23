import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import axios from "axios";
import { ButtonCustom, SectionButton } from "./DialogVendasStyle";

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

function DialogVendas(props) {
  const [dataSellUnique, setDataSellUnique] = React.useState();
  const [activeButtons, setActiveButtons] = React.useState({
    buttonDataCar: false,
    buttonDataCustomer: false,
    buttonDataExpense: false,
  });

  const SearchDataSellUnique = async () => {
    try {
      await axios
        .get(`http://localhost:3010/visualizar-venda/${props.rowSelectCar.id}`)
        .then((response) => {
          setDataSellUnique(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //   function formatDate(dateString) {
  //     const date = new Date(dateString);
  //     let day = date.getDate() + 1;
  //     let month = date.getMonth() + 1;
  //     const year = date.getFullYear();
  //     if (day < 9) day = `0${day}`;
  //     if (month < 9) month = `0${month}`;
  //     return `${day}-${month}-${year}`;
  //   }

  //   const formattedDate = dataSellUnique.Cliente.dataNascimento
  //   ? formatDate(dataSellUnique.Cliente.dataNascimento)
  //   : "";

  React.useEffect(() => {
    SearchDataSellUnique();
  }, [props.rowSelectCar]);

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={props.handleClickCloseModalVendas}
        aria-labelledby="customized-dialog-title"
        open={props.openModalVendas}
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
              onClick={props.handleClickCloseModalVendas}
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
            <h5>
              {props.rowSelectCar.nomeMarca} {props.rowSelectCar.nomeModelo}{" "}
              {props.rowSelectCar.nomeVersao}
            </h5>
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
        <DialogContent sx={{ backgroundColor: "#2f2841" }}>
          <SectionButton>
            <ButtonCustom
              variant="outlined"
              onClick={() => {
                setActiveButtons({
                  buttonDataCar: true,
                  buttonDataCustomer: false,
                  buttonDataExpense: false,
                });
              }}
            >
              Dados Veiculo
            </ButtonCustom>
            <ButtonCustom
              variant="outlined"
              onClick={() => {
                setActiveButtons({
                  buttonDataCustomer: true,
                  buttonDataCar: false,
                  buttonDataExpense: false,
                });
              }}
            >
              Dados Cliente
            </ButtonCustom>
            <ButtonCustom
              variant="outlined"
              onClick={() => {
                setActiveButtons({
                  buttonDataExpense: true,
                  buttonDataCar: false,
                  buttonDataCustomer: false,
                });
              }}
            >
              Dados Despesas
            </ButtonCustom>
          </SectionButton>

          {activeButtons.buttonDataCar && <h1>Botão Dado Veiculo ativo</h1>}
          {activeButtons.buttonDataCustomer && (
            <>
              <div
                style={{
                  width: "100%",
                  height: "10%",
                  //backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FormControl variant="standard">
                  <Input
                    type="text"
                    id="cpf"
                    required
                    placeholder="CPF"
                    readOnly
                    value={dataSellUnique.Cliente.cpf}
                    sx={{ width: 250, color: "#FFF" }}
                  />
                </FormControl>
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
                    gap: "4rem",
                    paddingTop: "1rem",
                  }}
                >
                  <FormControl variant="standard">
                    <Input
                      type="text"
                      id="nome"
                      required
                      placeholder="Nome"
                      value={dataSellUnique.Cliente.nome}
                      readOnly
                      sx={{ width: 250, color: "#FFF" }}
                    />
                  </FormControl>
                  <FormControl variant="standard">
                    <Input
                      type="text"
                      id="endereco"
                      placeholder="Endereço"
                      value={dataSellUnique.Cliente.endereco}
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
                      value={dataSellUnique.Cliente.bairro}
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
                      value={dataSellUnique.Cliente.cep}
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
                    gap: "4rem",
                  }}
                >
                  <FormControl variant="standard">
                    <Input
                      type="text"
                      id="rg"
                      required
                      placeholder="RG"
                      value={dataSellUnique.Cliente.rg}
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
                      value={dataSellUnique.Cliente.email}
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
                      value={dataSellUnique.Cliente.celular}
                      sx={{ width: 250, color: "#FFF" }}
                    />
                  </FormControl>

                  <FormControl variant="standard">
                    <Input
                      type="text"
                      id="dataNascimento"
                      required
                      placeholder="Data de Nascimento"
                      //value={formatDate}
                      readOnly
                      sx={{ width: 250, color: "#FFF" }}
                    />
                  </FormControl>
                </div>
              </div>
            </>
          )}
          {activeButtons.buttonDataExpense && <h1>Botão Dado Despesa ativo</h1>}

          <button
            onClick={() => {
              console.log(dataSellUnique);
            }}
          >
            teste
          </button>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#2f2841" }}></DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default DialogVendas;
