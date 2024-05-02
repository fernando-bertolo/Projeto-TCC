import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/Icon/Icon";
import BotoesListagem from "../Buttons/ButtonMUI";
import InputsMUI from "../InputMUI/InputsMUI";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Defina o esquema zod para validar os campos do formulário
const schemaZod = z.object({
  ano: z.string().max(4, { message: "Ano deve ter no máximo 4 caracteres" }),
  combustivel: z
    .string()
    .max(10, { message: "Combustivel deve ter no maximo 10 caracteres" }),
  cor: z
    .string()
    .max(10, { message: "A cor deve ter no maximo 10 caracteres" }),
  idStatus: z.string({ message: "ID do status deve ser uma string" }),
  quilometragem: z
    .number()
    .max(10, { message: "A quilometragem deve ter no maximo 10 caracteres" }),
  valor: z
    .number()
    .max(10, { message: "O valor deve ter no maximo 10 caracteres" }),
  selectAcessorios: z.array({ message: "Não é um array" }),
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ModalDialog() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schemaZod),
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const SendCarsData = async (carsData) => {
    try {
      schemaZod.parse(carsData);
      console.log("teste 2");

      // Enviando os dados para a rota /criacao-usuario
      await axios.post("http://localhost:3010/criacao-veiculos", carsData);

      // Mensagem de sucesso
      toast.success("Veículo criado com sucesso", {
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
      if (error.response && error.response.status === 400) {
        toast.warn(error.response.data.Error, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log(error);
      }
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
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="customized-dialog-title"
        >
          Cadastro de Veículo
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
          {/* <CloseIcon /> */}X
        </IconButton>
        <form onSubmit={handleSubmit(SendCarsData())}>
          <DialogContent dividers>
            <InputsMUI register={register} />
          </DialogContent>
          <DialogActions>
            <Button type="submit" autoFocus>
              Salvar
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
      <ToastContainer />
    </React.Fragment>
  );
}

export default ModalDialog;
