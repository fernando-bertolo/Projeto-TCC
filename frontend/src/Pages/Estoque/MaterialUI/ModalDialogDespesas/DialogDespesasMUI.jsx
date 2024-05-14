import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Delay from "../../../../Services/Delay/Delay";
import { Paper } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-root": {
    width: "80%", // Adjust as needed
    height: "10%", // Adjust as needed
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

function DialogDespesas(props) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={props.handleClickCloseDespesas}
        aria-labelledby="customized-dialog-title"
        open={props.openDespesas}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="customized-dialog-title"
        ></DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.handleClickCloseDespesas}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}X
        </IconButton>
        <DialogContent dividers elevation={4} sx={{ p: 8, width: 600 }}>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
      <ToastContainer />
    </React.Fragment>
  );
}

export default DialogDespesas;
