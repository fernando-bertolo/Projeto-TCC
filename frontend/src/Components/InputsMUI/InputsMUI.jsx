import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { z } from "zod";


// Defina o esquema zod para validar os campos do formulário
const schema = z.object({
  nome: z.string().min(3).max(50),
  email: z.string().email(),
  usuario: z.string().min(3).max(20),
  senha: z.string().min(6).max(20),
  confirmaSenha: z.string().min(6).max(20)
});



export default function InputsMUI(props) {
  
  // Estado para armazenar os erros de validação
  const [errors, setErrors] = React.useState({})

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setUserData({
      ...props.userData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Valide os dados do formulário com base no esquema zod
      schema.parse(props.userData);
      // Se a validação for bem-sucedida, envie os dados para o backend
      await props.SendUserData();
    } catch (error) {
      // Se a validação falhar, defina os erros no estado de erros
      setErrors(error.errors.reduce((acc, curr) => {
        return { ...acc, [curr.path[0]]: curr.message };
      }, {}));
    }
  };


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
      onSubmit={handleSubmit}
      
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Nome</InputLabel>
        <Input 
            type='text' 
            id="nome"
            name="nome" 
            placeholder='Insira o Nome'
            required
            value={props.userData.nome}
            onChange={handleInputChange}
        />
        {errors.nome && <div>{errors.nome}</div>} {/* Exibir erro, se houver */}
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">E-mail</InputLabel>
        <Input 
            type='email' 
            id="email"
            name='email'
            placeholder='Insira o E-mail'
            required
            value={props.userData.email}
            onChange={handleInputChange}
        />
        {errors.email && <div>{errors.email}</div>} {/* Exibir erro, se houver */}
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Usuário</InputLabel>
        <Input 
            type='text' 
            id="usuario"
            name='usuario'
            placeholder='Insira o Usuário'
            required
            value={props.userData.usuario}
            onChange={handleInputChange}
        />
        {errors.usuario && <div>{errors.usuario}</div>} {/* Exibir erro, se houver */}
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Senha</InputLabel>
        <Input 
            type='password' 
            id="senha"
            name="senha" 
            placeholder='Insira a Senha'
            required
            onChange={handleInputChange}
        />
        {errors.senha && <div>{errors.senha}</div>} {/* Exibir erro, se houver */}
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Confirme sua Senha</InputLabel>
        <Input 
            type='password'
            id="confirmaSenha"
            name="confirmaSenha"
            placeholder='Confirme sua Senha' 
            required
            onChange={handleInputChange}
        />
        {errors.confirmaSenha && <div>{errors.confirmaSenha}</div>} {/* Exibir erro, se houver */}
      </FormControl>

    </Box>
  );
}
