import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    DivTelaMain,
    SectionLogin,
    DivTitulo,
    Titulo,
    FormLogin,
    DivInput,
    Input,
    IconeUsuario,
    IconeSenha,
    DivIcones,
    DivBotao,
    Botao,
    TextoErroLogin

} from "./styles.jsx"


function Login(){

    const [inputUsuario, setInputUsuario] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [mensagemError, setMensagemError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        try{
            event.preventDefault();
            const response = await axios.post("http://localhost:3010/", {
                usuario: inputUsuario, // Esta pegando o usuario e senha da rota / do backend
                senha: inputSenha
            });
            setMensagemError(""); // limpando a mensagem de erro
            console.log(response);
            localStorage.setItem("@montanaToken", response.data.token); // Armazenando token de sessão do usuário no local storage do navegador
            navigate("/dashboard");
        }
        catch(mensagemError){
            if(mensagemError === 401) {
                setMensagemError("ERRO AO ACESSAR O SERVIDOR");
            } else{
                setMensagemError(mensagemError.response.data.message);
            }
        }
    };

    return(
        <DivTelaMain>
            <SectionLogin>
                <DivTitulo>
                    <Titulo>Login</Titulo>
                </DivTitulo>
                <FormLogin>
                    <DivInput>
                        <DivIcones>
                            <IconeUsuario/>
                        </DivIcones>
                        <Input type="text" name="usuario" placeholder="Usuario" required onChange={evento => {setInputUsuario(evento.target.value)}}/>
                    </DivInput>
                    <DivInput>
                        <DivIcones>
                            <IconeSenha/>
                        </DivIcones>
                        <Input type="password" name="senha" placeholder="Senha" required onChange={evento => {setInputSenha(evento.target.value)}}/>
                    </DivInput>
                    <TextoErroLogin>{mensagemError}</TextoErroLogin>

                </FormLogin >
                <DivBotao>
                    <Botao type="submit" onClick={(e) => handleLogin(e)}>Login</Botao>
                </DivBotao>
            </SectionLogin>
        </DivTelaMain>
    )
}

export default Login;