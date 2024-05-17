import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      width: 500,
      maxWidth: "none",
      borderRadius: 30,
    },
    "& .MuiDialogContent-root": {
      padding: theme.spacing(0),
      width: 500,
      height: 600,
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(2),
    },
  }));


function SubDialogDespesas(props){


    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={props.handleCloseSubDialog}
                aria-labelledby="customized-dialog-title"
                open={props.openSubDialog}
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
                    id="customized-dialog-title"
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
                        onClick={props.handleCloseSubDialog}
                        sx={{
                            color: (theme) => theme.palette.grey[500],
                        }}
                        >
                        {/* <CloseIcon /> */}X
                        </IconButton>
                    </div>
                </DialogTitle>


                <DialogContent>
                    <h1>teste</h1>
                </DialogContent>

                 <DialogActions sx={{ backgroundColor: "#2f2841" }}></DialogActions>

            </BootstrapDialog>
        </React.Fragment>
    )
}

export default SubDialogDespesas;