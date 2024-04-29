import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";
import BotoesListagem from "../ButtonMUI/ButtonMUI";
import InputsMUI from "../InputsMUI/InputsMUI";
//import AlertMUI from '../AlertMUI/AlertMUI';
import axios from "axios";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";

// Defina o esquema zod para validar os campos do formulário
const schemaZod = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres" })
    .max(50),
  email: z.string().email({ message: "Insira um e-mail válido" }),
  usuario: z.string().min(3, { message: "Insira um usuário válido" }).max(20),
  senha: z
    .string()
    .min(5, { message: "A senha deve ter no mínimo 5 caracteres" })
    .max(20),
  confirmaSenha: z
    .string()
    .min(5, { message: "A senha deve ter no mínimo 5 caracteres" })
    .max(20),
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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

  const [userData, setUserData] = React.useState({
    nome: "",
    email: "",
    usuario: "",
    senha: "",
    confirmaSenha: "",
  });

  const SendUserData = async (event) => {
    event.preventDefault();
    try {
      const userDataValidate = schemaZod.parse({
        nome: userData.nome,
        email: userData.email,
        usuario: userData.usuario,
        senha: userData.senha,
        confirmaSenha: userData.confirmaSenha,
      });

      console.log(userDataValidate);

      // Enviando os dados para a rota /criacao-usuario
      await axios.post("http://localhost:3010/criacao-usuario", {
        nome: userData.nome,
        email: userData.email,
        usuario: userData.usuario,
        senha: userData.senha,
        confirmaSenha: userData.confirmaSenha,
      });

      // Mensagem de sucesso
      toast.success("Usuario criado com sucesso", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      // Mensagem de aviso
      toast.warn(error.errors[0].message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <BotoesListagem handleClickOpen={handleClickOpen} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="customized-dialog-title"
        >
          Cadastro de Usuário
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <InputsMUI setUserData={setUserData} userData={userData}></InputsMUI>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            autoFocus
            onClick={(event) => SendUserData(event)}
          >
            Salvar
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <ToastContainer />
    </React.Fragment>
  );
}

export default ModalDialog;
