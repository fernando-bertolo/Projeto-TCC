import {
    DivTelaMain,
    DivTitulo,
    Titulo,
    DivIcones,
    Botao
} from "../styles";
import {SectionAutenticacao} from "../../../Components/BodyPages/style.jsx";

import {
    SectionInput,
    Input,
    DivInput,
    IconeCadeado,
    DivBotao
} from "./styles.jsx";

import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";


// Função de delay
function delay(n) {
    return new Promise(function(resolve) {
        setTimeout(resolve, n * 1000);
    });
}


function ResetarSenha(){

    // armazenando o estado da senha com useState
    const [inputSenha, setInputSenha] = useState("");
    const [inputConfirmaSenha, setInputConfirmaSenha] = useState("");
    const navigate = useNavigate();
    const { tokenSenha } = useParams();
    

    const Resetar = async (event) => {
        try {
            event.preventDefault();



            if(inputSenha === "" && inputConfirmaSenha === ""){
                toast.warn("O campo de senha deve ser preenchido", {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } 
            
            else if(inputSenha !== inputConfirmaSenha){
                toast.warn("Senhas diferentes!", {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } 
            
            else if(inputSenha.length < 5 || inputConfirmaSenha.length < 5){
                toast.warn("A senha deverá ter no mínimo 5 caracteres", {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } 
            
            else{
                await axios.post("http://localhost:3010/resetar-senha/"+ tokenSenha, {
                    senha: inputSenha, // Enviando o valor do inputSenha da requisição para o backend
                    confirmaSenha: inputConfirmaSenha
                })
                toast.success("Senha alterada com sucesso!!", {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                await delay(3);
                navigate("/");
            }
                            
        } catch (error) {
        
        }
    }
    return(
        <DivTelaMain>
            <SectionAutenticacao>
                <DivTitulo>
                    <Titulo>Esqueceu sua Senha?</Titulo>
                </DivTitulo>

                <SectionInput>
                    <DivInput>
                        <DivIcones>
                            <IconeCadeado/>
                        </DivIcones>
                        <Input type="password" name="senha" id="senha" placeholder="Digite a nova senha" required onChange={event => {setInputSenha(event.target.value)}}/>
                    </DivInput>

                    <DivInput>
                        <DivIcones>
                            <IconeCadeado/>
                        </DivIcones>
                        <Input type="password" name="confirmaSenha" id="confirmaSenha" placeholder="Confirme a nova senha" required onChange={event => {setInputConfirmaSenha(event.target.value)}}/>
                    </DivInput>
                </SectionInput>

                <DivBotao>
                    <Botao type="submit" onClick={(event) => Resetar(event)}>Confirmar</Botao>
                </DivBotao>
                
            </SectionAutenticacao>
            <ToastContainer />
        </DivTelaMain>
    );
}

export default ResetarSenha;