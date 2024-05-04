import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  DivTable,
  SectionSearch,
  DivPrimaria,
  DivSecundaria,
  DivTerciaria,
  Title,
  SectionNavigator,
} from "./DataTableMUIStyles";
import ModalDialog from "../ModalDialog/DialogMUI";
import Button from "@mui/material/Button";

function DataTableMUI(props) {
  return (
    <>
      <DivTable>
        <SectionNavigator>
          <Button variant="contained" href="#">
            Despesas
          </Button>
          <Button variant="outlined" href="#">
            Vendas
          </Button>
        </SectionNavigator>
        <SectionSearch>
          <DivPrimaria></DivPrimaria>
          <DivSecundaria>
            <Title>Estoque</Title>
          </DivSecundaria>
          <DivTerciaria>
            <ModalDialog></ModalDialog>
          </DivTerciaria>
        </SectionSearch>
        <div
          style={{
            height: "80%",
            width: "80%",
          }}
        >
          <DataGrid
            rows={props.rows}
            columns={props.columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            checkboxSelection
            style={{
              borderRadius: 10,
              backgroundColor: "#FFF",
              color: "black",
            }}
          />
        </div>
      </DivTable>
    </>
  );
}

export default DataTableMUI;
