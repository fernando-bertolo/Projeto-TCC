import {
    DivTelaMain,
    DivTitulo,
    Titulo,
    Input
} from "../styles";

import {
    TextoEmail,
    DivTextoEmail,
    SectionRecuperar,
    DivInput,
    DivIcone,
    IconeMail,
    TextoVoltarLogin,
    DivBotao,
    Botao
} from "./style.jsx"

import {SectionAutenticacao} from "../../../Components/BodyPages/style.jsx";

import {useState} from "react";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function EsquecerSenha(){

    const [inputEmail, setInputEmail] = useState();
    const [setMensagemError] = useState();

    const Recuperar = async (event) => {
        try {
        event.preventDefault();

        await axios.post("http://localhost:3010/esquecer-senha",{
            email: inputEmail
        })
        
        toast.success("E-mail enviado com sucesso", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

                
        } catch (mensagemError) {

            if(mensagemError === 401){
                setMensagemError("Ocorreu um erro inesperado")
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
    }

    return(
        <>
            <DivTelaMain>
                <SectionAutenticacao>
                    <DivTitulo>
                        <Titulo>Recuperar senha</Titulo>
                    </DivTitulo>
                    <DivTextoEmail>
                        <TextoEmail>Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha.</TextoEmail>
                    </DivTextoEmail>

                    <SectionRecuperar>
                        <DivInput>
                            <DivIcone>
                                <IconeMail/>
                            </DivIcone>
                            <Input type="email" name="email" placeholder="E-mail" required onChange={event => {setInputEmail(event.target.value)}}/>
                        </DivInput>
                        <TextoVoltarLogin to={"/"}>Voltar para o Login</TextoVoltarLogin>
                    </SectionRecuperar>

                    <DivBotao>
                        <Botao type="submit" onClick={(e) => Recuperar(e)}>RECUPERAR</Botao>
                        <ToastContainer />
                    </DivBotao>

                    
                </SectionAutenticacao>
            </DivTelaMain>
        </>
    );
}

export default EsquecerSenha;