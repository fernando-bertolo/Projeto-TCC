import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  DivTable,
  SectionSearch,
  DivPrimaria,
  DivSecundaria,
  DivTerciaria,
  Title,
} from "./DataTableMUIStyles";
import BotoesListagem from "../Buttons/ButtonMUI";
import ModalDialog from "../../DialogMUI/DialogMUI";

function DataTableMUI(props) {
  return (
    <>
      <DivTable>
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
            height: "60%",
            width: "60%",
            backgroundColor: "pink",
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
            }}
          />
        </div>
      </DivTable>
    </>
  );
}

export default DataTableMUI;
