import { styled } from "styled-components";
import {FaLock} from "react-icons/fa";




export const SectionInput = styled.section`

    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    gap: 2rem;
    //background-color: orange;

`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    color: #FFF;
    border: none;
    font-family: 'Raleway', sans-serif;
    border-radius: 10px;
    background-color: #514869;
    font-size: 1rem;

    &:focus{
        outline: none // Retira a borda ressaltada ao clicar
    }
`;

export const DivInput = styled.div`
    width: 80%;
    height: 25%;
    background-color: #514869;
    display: flex;
    border-radius: 10px;
`;



export const IconeCadeado = styled(FaLock)`
    width: 3vw;
    height: 3vh;
    color: #FFF;
    opacity: 0.58;

    @media(max-width: 400px){
        width: 5vw;
        height: 5vh;
    }
`;

export const DivBotao = styled.div`

    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: red;
`;