import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/material/Icon/Icon';
import Typography from '@mui/material/Typography';
import BotoesListagem from '../ButtonMUI/ButtonMUI';
import InputsMUI from '../InputsMUI/InputsMUI';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function ModalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [userData, setUserData] = React.useState();


  return (
    <React.Fragment>
      <BotoesListagem handleClickOpen={handleClickOpen}/>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: "flex", justifyContent: "center", alignItems: "center" }} id="customized-dialog-title">
          Cadastro de Usuário
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <InputsMUI setUserData={setUserData}></InputsMUI>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Salvar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}


export default ModalDialog;