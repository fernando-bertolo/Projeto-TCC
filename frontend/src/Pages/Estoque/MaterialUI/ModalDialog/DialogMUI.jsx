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

//Definindo acessorio, array de objetos
const schemaAcessorios = z.array(
  z.object({
    nomeAcessorio: z.string().min(1, "Valor inválido"),
  })
);

// Define o esquema zod para validar os campos do formulário
const schemaZod = z.object({
  idMarca: z.string(),
  idModelo: z.string(),
  idVersao: z.string(),
  ano: z
    .string()
    .min(1, "Por favor, digite um valor válido")
    .max(4, "Ano deve ter no máximo 4 caracteres"),
  combustivel: z
    .string()
    .min(1, "Por favor, digite um valor válido")
    .max(10, "Combustivel deve ter no maximo 10 caracteres"),
  cor: z
    .string()
    .min(1, "Por favor, digite um valor válido")
    .max(10, "A cor deve ter no maximo 10 caracteres"),
  idStatus: z.string("ID do status deve ser uma string"),
  quilometragem: z
    .string()
    .min(1, "Por favor, digite um valor válido")
    .max(10, "Por favor, digite um valor válido!!"),
  valor: z
    .string()
    .min(1, "Por favor, digite um valor válido")
    .max(10, "Por favor, digite um valor válido!!"),
  placa: z
    .string()
    .min(1, "Por favor, digite um valor válido!!!")
    .max(10, "Por favor, Digite um valor válido!!!"),
  acessorios: schemaAcessorios,
});

function ModalDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaZod),
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log("Cheguei aqui");
    console.log(data);

    // console.log(carsData);
    // try {
    //   schemaZod.parse(carsData);
    //   console.log("teste 2");

    //   // Enviando os dados para a rota /criacao-usuario
    //   await axios.post("http://localhost:3010/criacao-veiculos", carsData);

    //   // Mensagem de sucesso
    //   toast.success("Veículo criado com sucesso", {
    //     position: "bottom-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     toast.warn(error.response.data.Error, {
    //       position: "bottom-right",
    //       autoClose: 2500,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   } else {
    //     console.log(error);
    //   }
    // }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            <InputsMUI register={register} errors={errors} />
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
