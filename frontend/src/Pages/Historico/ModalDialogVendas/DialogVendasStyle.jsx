import styled from "styled-components";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";

export const DataGridCustom = styled(DataGrid)`
  background-color: #2f2841;

  .MuiDataGrid-columnHeader {
    color: white; // Altera a cor do texto do cabeçalho
    background-color: #2f2841;
  }

  .MuiCheckbox-root {
    color: #1565c0; // Altere a cor do check aqui
  }

  .MuiTablePagination-root .MuiTablePagination-input {
    color: #ff0000; // Altere a cor da numeração da página aqui
  }
`;

export const SectionButton = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  //background-color: red;
`;

export const ButtonCustom = styled(Button)``;

export const DivCPF = styled.div`
  width: 100%;
  height: 10%;
  //background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  //padding-top: 1rem;
`;

export const MainContent = styled.main`
  width: 100%;
  height: calc(75% - 1rem);
  //background-color: green;
  display: flex;
`;

export const MainContentCar = styled.main`
  width: 100%;
  height: 80%;
  //background-color: red;
  display: flex;

`;

export const SectionContent = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-color: orange;
  gap: 3rem;
  padding-top: 1rem;
`;


export const FormControlMUI = styled(FormControl)`
  width: 50%;
`;

export const InputMUI = styled(Input)`
  width: 100%;
  color: #FFF;
`;

export const DivRowFormControl = styled.div`
  width: 100%;
  height: 10%;
  //background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const DivLabel = styled.div`
  width: 25%;
  height: 100%;
  //background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  color: #7176FF;
`;



