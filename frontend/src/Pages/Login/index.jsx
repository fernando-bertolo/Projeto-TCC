import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    DivTelaMain,
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
    TextoEsqueciSenha,
    TextoErroLogin

} from "./styles.jsx";

import {SectionAutenticacao} from "../../Components/BodyPages/style.jsx"

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
            console.log(response)
            setMensagemError(""); // limpando a mensagem de erro
            localStorage.setItem("@TokenUsuario", response.data.token); // Armazenando token de sessão do usuário no local storage do navegador
            navigate("/home");
            
        }
        catch(mensagemError){
            if(mensagemError === 401) {
                setMensagemError("ERRO AO ACESSAR O SERVIDOR");
            } else{
                toast.warn(mensagemError.response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
    };


    return(
        <DivTelaMain>
            <SectionAutenticacao>
                <DivTitulo>
                    <Titulo>Login</Titulo>
                </DivTitulo>
                <FormLogin>
                    <DivInput>
                        <DivIcones>
                            <IconeUsuario/>
                        </DivIcones>
                        <Input type="text" name="usuario" placeholder="Usuario" required onChange={event => {setInputUsuario(event.target.value)}}/>
                    </DivInput>
                    <DivInput>
                        <DivIcones>
                            <IconeSenha/>
                        </DivIcones>
                        <Input type="password" name="senha" placeholder="Senha" required onChange={event => {setInputSenha(event.target.value)}}/>
                    </DivInput>
                    <TextoErroLogin>{mensagemError}</TextoErroLogin>

                </FormLogin >
                <DivBotao>
                    <Botao type="submit" onClick={(e) => handleLogin(e)}>Login</Botao>
                    <TextoEsqueciSenha to={"/esquecer-senha"}>Esqueci minha senha</TextoEsqueciSenha>
                    <ToastContainer />
                </DivBotao>
            </SectionAutenticacao>
        </DivTelaMain>
    )
}

export default Login;