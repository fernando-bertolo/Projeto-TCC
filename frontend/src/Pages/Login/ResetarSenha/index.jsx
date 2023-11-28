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





function ResetarSenha(){

    const [inputSenha, setInputSenha] = useState("");
    const [inputConfirmaSenha, setInputConfirmaSenha] = useState("");
    const navigate = useNavigate();
    const { tokenSenha } = useParams();

    const Resetar = async (event) => {
        try {
            event.preventDefault();
            if(inputSenha === inputConfirmaSenha){
                await axios.post("http://localhost:3010/resetar-senha/"+ tokenSenha, {
                    senha: inputSenha
                })
                toast.success("Senha alterada com sucesso!!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

            } else{
                toast.warn("Senhas diferentes!", {
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