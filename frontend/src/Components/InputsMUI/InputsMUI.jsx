import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

export default function InputsMUI(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="nome">Nome</InputLabel>
        <Input
          type="text"
          id="nome"
          name="nome"
          placeholder="Insira o Nome"
          required
          {...props.register("nome")}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Insira o E-mail"
          required
          {...props.register("email")}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="usuario">Usuário</InputLabel>
        <Input
          type="text"
          id="usuario"
          name="usuario"
          placeholder="Insira o Usuário"
          required
          {...props.register("usuario", {
            required: "Campo Usuário Obrigatório",
          })}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="senha">Senha</InputLabel>
        <Input
          type="password"
          id="senha"
          name="senha"
          placeholder="Insira a Senha"
          required
          {...props.register("senha")}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="confirmaSenha">Confirme sua Senha</InputLabel>
        <Input
          type="password"
          id="confirmaSenha"
          name="confirmaSenha"
          placeholder="Confirme sua Senha"
          required
          {...props.register("confirmaSenha")}
        />
      </FormControl>
    </Box>
  );
}
