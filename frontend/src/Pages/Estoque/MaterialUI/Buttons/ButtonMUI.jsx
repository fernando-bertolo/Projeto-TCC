import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

function BotoesListagem(props) {
  const buttons = [
    <Button
      key="Criar"
      onClick={() => {
        props.handleClickOpen(true);
      }}
    >
      Criar
    </Button>,
    <Button
      key="Editar"
      onClick={() => {
        props.handleClickEditOpen(true);
      }}
    >
      Editar
    </Button>,
    <Button
      key="Excluir"
      onClick={() => {
        props.deleteCar();
      }}
    >
      Excluir
    </Button>,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="Small button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

export default BotoesListagem;
