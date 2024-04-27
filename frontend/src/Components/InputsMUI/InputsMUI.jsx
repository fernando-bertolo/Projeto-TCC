import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export default function InputsMUI(props) {

    const [inputUsuario, setInputUsuario] = React.useState({
        nome: "",
        email: "",
        usuario: "",
        senha: "",
        confirmaSenha: ""
    });


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      noValidate
      autoComplete="off"
      
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Nome</InputLabel>
        <Input 
            type='text' 
            id="nome"
            name="nome" 
            placeholder='Insira o Nome'
            required
            value={inputUsuario.nome}
            onChange={(event) => {
                setInputUsuario({
                    ...inputUsuario,
                    nome: event.target.value
                });
            }}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">E-mail</InputLabel>
        <Input 
            type='email' 
            id="email"
            name='email'
            placeholder='Insira o E-mail'
            required
            value={inputUsuario.email}
            onChange={(event) => {
                setInputUsuario({
                    ...inputUsuario,
                    email: event.target.value
                })
            }}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Usuário</InputLabel>
        <Input 
            type='text' 
            id="usuario"
            name='usuario'
            placeholder='Insira o Usuário'
            required
            value={inputUsuario.usuario}
            onChange={(event) => {
                setInputUsuario({
                    ...inputUsuario,
                    usuario: event.target.value
                })
            }}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Senha</InputLabel>
        <Input 
            type='password' 
            id="senha"
            name="senha" 
            placeholder='Insira a Senha'
            required
            onChange={(event) => {
                setInputUsuario({
                    ...inputUsuario,
                    senha: event.target.value
                })
            }}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Confirme sua Senha</InputLabel>
        <Input 
            type='password'
            id="confirmaSenha"
            name="confirmaSenha"
            placeholder='Confirme sua Senha' 
            required
            onChange={(event) => {
                setInputUsuario({
                    ...inputUsuario,
                    confirmaSenha: event.target.value
                })
            }}
        />
      </FormControl>

    </Box>
  );
}
