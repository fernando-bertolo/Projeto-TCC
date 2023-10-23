import styled from "styled-components";
import {FaRegUser} from "react-icons/fa";
import {AiOutlineLock} from "react-icons/ai";
import { Link } from "react-router-dom";

export const DivTelaMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(17, 14, 27);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
`;

export const SectionLogin = styled.section`
    width: 25%;
    height: 50%;
    background-color: #2f2841;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #FFF;

    @media(max-width: 400px){
        width: 80%
    }
`;

export const DivTitulo = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    //background-color: red;
    border-radius: 20px 20px 0px 0px;
`;

export const Titulo = styled.p`
    color: #7176FF;
    font-family: 'Raleway', sans-serif;
    font-size: clamp(1.5vw, 2vw, 2.5vw);

    @media(max-width: 400px){
        font-size: clamp(7vw, 8vw, 9vw);
    }
`;

export const FormLogin = styled.form`
    width: 100%;
    height: 60%;
    //background-color: orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const DivInput = styled.div`
    width: 80%;
    height: 20%;
    background-color: #514869;
    display: flex;
    border-radius: 10px;
`;

export const DivIcones = styled.div`
    width: 20%;
    height: 100%;
    //background-color: red;
    display: flex;
    justify-content: center;
    align-items: center
`;

export const IconeUsuario = styled(FaRegUser)`
    width: 3vw;
    height: 3vh;
    color: #FFF;
    opacity: 0.58;

    @media(max-width: 400px){
        width: 4vw;
        height: 4vh;
    }
`;

export const IconeSenha = styled(AiOutlineLock)`
    width: 3vw;
    height: 3vh;
    color: #FFF;
    opacity: 0.58;

    @media(max-width: 400px){
        width: 5vw;
        height: 5vh;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-family: 'Raleway', sans-serif;
    border-radius: 10px;
    background-color: #514869;
    font-size: 1rem;

    &:focus{
        outline: none // Retira a borda ressaltada ao clicar
    }
`;

export const DivBotao = styled.div`
    width: 100%;
    height: 25%;
    border-radius: 0px 0px 20px 20px;
    //background-color: green;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Botao = styled.button`
    width: 80%;
    height: 50%;
    border-radius: 10px;
    color: black;
    font-family: 'Raleway', sans-serif;
    background-color: #7176FF;
    border: none;
    font-size: 1vw;
    cursor: pointer;

    @media(max-width: 400px){
        font-size: clamp(4vw, 5vw, 6vw);
    }
`;

export const TextoEsqueciSenha = styled(Link)`
    color: #FFF;
    font-size: 0.9vw;
`;

export const TextoErroLogin = styled.p`
    color: #FFF;
`;