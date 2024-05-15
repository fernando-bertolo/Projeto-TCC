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
