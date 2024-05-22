import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

import {
  DataGridCustom,
  DivTable,
  SectionSearch,
  DivPrimaria,
  DivSecundaria,
  DivTerciaria,
  Title,
} from "./DataTableVendasStyle";

function DataTableVendas(props) {
  return (
    <>
      <DivTable>
        <SectionSearch>
          <DivPrimaria></DivPrimaria>
          <DivSecundaria>
            <Title>Histórico de Vendas</Title>
          </DivSecundaria>
          <DivTerciaria>
            <Button key="detalhes">Detalhes</Button>
            <Button key="excluir">Excluir</Button>
          </DivTerciaria>
        </SectionSearch>
        <div
          style={{
            height: "80%",
            width: "80%",
          }}
        >
          <DataGridCustom
            rows={props.rowsSellCars}
            columns={props.columnsCars}
            //onRowSelectionModelChange={handleRowSelectionChange}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            checkboxSelection
            style={{
              borderRadius: "10px 10px 10px 10px",
              color: "#fff",
              border: "none",
            }}
          />
        </div>
      </DivTable>
    </>
  );
}

export default DataTableVendas;
