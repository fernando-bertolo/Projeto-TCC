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
import Lottie from "lottie-react";
import animationData from "../../../assets/lottieAnimations/AnimationNotFound.json";
import { 
  ButtonCustom, 
  SectionButton, 
  DivCPF,
  MainContent,
  MainContentCar,
  SectionContent,
  FormControlMUI,
  InputMUI,
  DivRowFormControl,
  Label,
  DivLabel,
  DataGridCustom
} from "./DialogVendasStyle";

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
  const [dataSellUnique, setDataSellUnique] = React.useState([]);
  const [dataExpense, setDataExpense] = React.useState([]);
  const [activeButtons, setActiveButtons] = React.useState({
    buttonDataCar: false,
    buttonDataCustomer: false,
    buttonDataExpense: false,
  });

  const SearchDataSellUnique = React.useCallback( async () => {
    try {
      await axios
        .get(`http://localhost:3010/visualizar-venda/${props.rowSelectCar.id}`)
        .then((response) => {
          setDataSellUnique(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [props.rowSelectCar]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    let day = date.getDate() + 1;
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (day < 9) day = `0${day}`;
    if (month < 9) month = `0${month}`;
    return `${day}-${month}-${year}`;
  }

  const buscaDespesaIdVeiculo = React.useCallback(async () => {
    await axios
      .get(`http://localhost:3010/visualizar-despesa/${dataSellUnique.idVeiculo}`)
      .then((response) => {
        setDataExpense(response.data);
      });
  }, [dataSellUnique.idVeiculo]);
  
  React.useEffect(()  => {
    SearchDataSellUnique();
    buscaDespesaIdVeiculo();

  }, [props.rowSelectCar, SearchDataSellUnique, buscaDespesaIdVeiculo]);



  const rowsExpense = dataExpense.map((dataExpense) => {
    const formattedDate = dataExpense.Data
      ? formatDate(dataExpense.Data)
      : "";
    //console.log(formatDate);
    return {
      id: dataExpense.idDespesa,
      Data: formattedDate,
      Titulo: dataExpense.Titulo,
      descricao: dataExpense.descricao,
      responsavel: dataExpense.Usuario.nome,
      valor: dataExpense.valor,
    };
  });


  const columnsExpense = [
    {
      field: "Data",
      headerName: "Data",
      width: 210,
    },
    { field: "Titulo", headerName: "Titulo", width: 250 },
    { field: "responsavel", headerName: "Responsável", width: 240 },
    //{ field: "descricao", headerName: "descricao", width: 160 },
    { field: "valor", headerName: "Valor", width: 200 },
  ];


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

          {activeButtons.buttonDataCar && (
            <>
              <MainContentCar>

                <SectionContent>
                  <DivRowFormControl>
                    <DivLabel>
                      <Label  abel htmlFor="marca">Marca: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="marca"
                        required
                        value={dataSellUnique.Veiculo.Marca.nomeMarca}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>

                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="modelo">Modelo: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="modelo"
                        required
                        value={dataSellUnique.Veiculo.Marca.Modelos[0].nomeModelo}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>


                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="versao">Versão: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="versao"
                        required
                        value={dataSellUnique.Veiculo.Marca.Modelos[0].Versoes[0].nomeVersao}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>

                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="ano">Ano: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="ano"
                        required
                        value={dataSellUnique.Veiculo.ano}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>



                </SectionContent>

                <SectionContent>
                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="quilometragem">Quilometragem: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="quilometragem"
                        required
                        value={dataSellUnique.Veiculo.quilometragem}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>


                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="placa">Placa: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="placa"
                        required
                        value={dataSellUnique.Veiculo.placa}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>

                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="valor">Valor Compra: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="valor"
                        required
                        value={dataSellUnique.Veiculo.valor}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>



                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="valorVenda">Valor Venda: </Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="valorVenda"
                        required
                        value={dataSellUnique.valorVenda}
                        sx={{color: "#FFF"}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>





                </SectionContent>

              </MainContentCar>

            
            </>
          )}



          {activeButtons.buttonDataCustomer && (
            <>
              <DivCPF>
                <DivRowFormControl>
                  <DivLabel style={{justifyContent: "flex-end"}}>
                    <Label htmlFor="cpf">CPF: </Label>
                  </DivLabel>
                  <FormControlMUI variant="standard">
                    <InputMUI
                      type="text"
                      id="cpf"
                      required
                      value={dataSellUnique.Cliente.cpf}
                      sx={{color: "#FFF", width: 250}}
                    />
                  </FormControlMUI>
                </DivRowFormControl>
              </DivCPF>

              <MainContent>
                <SectionContent>

                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="nome">Nome:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="nome"
                        required
                        value={dataSellUnique.Cliente.nome}
                        sx={{color: "#FFF", width: 250}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>


                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="endereco">Endereço:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <InputMUI
                        type="text"
                        id="endereco"
                        required
                        value={dataSellUnique.Cliente.endereco}
                        sx={{color: "#FFF", width: 250}}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>


                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="bairro">Bairro:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                    <Input
                      type="text"
                      id="bairro"
                      required
                      placeholder="Bairro"
                      readOnly
                      value={dataSellUnique.Cliente.bairro}
                      sx={{ width: 250, color: "#FFF" }}
                    />
                    </FormControlMUI>
                  </DivRowFormControl>


                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="cep">CEP:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                    <Input
                      type="text"
                      id="cep"
                      required
                      placeholder="CEP"
                      readOnly
                      value={dataSellUnique.Cliente.cep}
                      sx={{ width: 250, color: "#FFF" }}
                    />
                    </FormControlMUI>
                  </DivRowFormControl>

                </SectionContent>

                <SectionContent>

                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="rg">RG:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <Input
                        type="text"
                        id="rg"
                        required
                        placeholder="RG"
                        value={dataSellUnique.Cliente.rg}
                        readOnly
                        sx={{ width: 250, color: "#FFF" }}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>


                  
                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="email">E-mail:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <Input
                        type="text"
                        id="email"
                        required
                        placeholder="E-mail"
                        value={dataSellUnique.Cliente.email}
                        readOnly
                        sx={{ width: 250, color: "#FFF" }}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>


                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="celular">Celular:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <Input
                        type="text"
                        id="celular"
                        required
                        placeholder="Celular"
                        readOnly
                        value={dataSellUnique.Cliente.celular}
                        sx={{ width: 250, color: "#FFF" }}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>


                  <DivRowFormControl>
                    <DivLabel>
                      <Label htmlFor="dataNascimento">Data de Nascimento:</Label>
                    </DivLabel>
                    <FormControlMUI variant="standard">
                      <Input
                        type="text"
                        id="dataNascimento"
                        required
                        placeholder="Data de Nascimento"
                        value={dataSellUnique.Cliente.dataNascimento ? formatDate(dataSellUnique.Cliente.dataNascimento) : ""}
                        readOnly
                        sx={{ width: 250, color: "#FFF" }}
                      />
                    </FormControlMUI>
                  </DivRowFormControl>
                </SectionContent>
              </MainContent>
            </>
          )}
          {activeButtons.buttonDataExpense && (
            <>
              {dataExpense.length > 0 ? (
                <>
                  <DataGridCustom
                    rows={rowsExpense}
                    columns={columnsExpense}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                      },
                    }}
                    style={{
                      color: "#fff",
                      border: "none",
                      borderRadius: 0,
                      //width: 600,
                    }}
                  />
                </>
              ): (
                <>
                  <div
                    style={{
                      backgroundColor: "#2f2841",
                      width: "100%",
                      height: "90%",
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
                </>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#2f2841" }}></DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default DialogVendas;
