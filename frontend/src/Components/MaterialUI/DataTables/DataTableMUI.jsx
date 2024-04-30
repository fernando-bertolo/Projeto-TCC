import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DivMain } from "../../Listagem/style";

function DataTableMUI(props) {
  return (
    <>
      <DivMain>
        <div
          style={{
            height: "60%",
            width: "60%",
          }}
        >
          <DataGrid
            rows={props.rowsCars}
            columns={props.columnsCars}
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
      </DivMain>
    </>
  );
}

export default DataTableMUI;
