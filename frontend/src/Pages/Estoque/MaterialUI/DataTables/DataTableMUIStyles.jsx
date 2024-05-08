import styled from "styled-components";
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

export const DivTable = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: purple;
`;

export const SectionSearch = styled.section`
  width: 80%;
  height: 6%;
  display: flex;
  //background-color: pink;
`;

export const DivPrimaria = styled.div`
  width: 25%;
  //background-color: red;
`;
export const DivSecundaria = styled.div`
  width: 50%;
  //background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.5vw;
`;
export const DivTerciaria = styled.div`
  width: 25%;
  //background-color: blue;
  display: flex;
  justify-content: flex-end;
`;

export const SectionNavigator = styled.section`
  width: 80%;
  height: 5%;
  display: flex;
  gap: 1rem;
  //background-color: brown;
`;
