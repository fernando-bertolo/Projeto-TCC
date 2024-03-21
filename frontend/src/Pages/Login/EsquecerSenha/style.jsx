import styled  from "styled-components";
import {AiOutlineMail} from "react-icons/ai";
import { Link } from "react-router-dom";

export const DivTextoEmail = styled.div`
    width: 100%;
    height: 20%;
    //background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextoEmail = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 0.9vw;
`;

export const SectionRecuperar = styled.section`
    width: 100%;
    height: 30%;
    //background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:1rem;
`;

export const DivInput = styled.div`
    width: 80%;
    height: 40%;
    background-color: #514869;
    display: flex;
    border-radius: 10px;
`;

export const DivIcone = styled.div`
    width: 20%;
    height: 100%;
    //background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconeMail = styled(AiOutlineMail)`
    width: 3vw;
    height: 3vh;
    color: #FFF;
    opacity: 0.58;
`;

export const TextoVoltarLogin = styled(Link)`
    color: #FFF;
    font-size: 0.9vw;
`;


export const DivBotao = styled.div`
    width: 100%;
    height: 30%;
    //background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;

`;


export const Botao = styled.button`

    width: 80%;
    height: 40%;
    border-radius: 10px;
    color: black;
    font-family: 'Raleway', sans-serif;
    background-color: #7176FF;
    border: none;
    font-size: 1vw;
    cursor: pointer;

`;



