import {styled, css} from "styled-components";

export const SectionMainContent = styled.section`
    width: 30%;
    height: 80%;
    position: fixed;
    background-color: #2F2841;
    border-radius: 30px;

    ${({isOpen}) => isOpen === true && css`
        animation AnimationOpen 0.4s

        @keyframes AnimationOpen {
            from {
                top: 0;
            }
            to {
                top: 50%;
            }
        }
    `}


`;

export const MainContentbackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255,255,255, 0.4);
`;

export const FormCadastro = styled.form`
    width: 100%;
    height: 90%;
    //background-color: red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

export const DivTitulo = styled.div`
    width: 100%;
    height: 10%;
    //background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.p`
    color: #FFF;
    font-size: clamp(1.2vw, 1.5vw, 1.7vw);
`;

export const Input = styled.input`
    width: 80%;
    height: 5%;
    border-radius: 10px;
`;



export const DivBotoes = styled.div`
    width: 100%;
    height: 10%;
    //background-color: blue;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const BotaoCancelar = styled.button`
    background-color: red;
    border-radius: 10px;
    border-style: none;
    cursor: pointer;
    width: 20%;
    height: 40%;

`;

export const BotaoAdicionar = styled.button`
    background-color: green;
    border-radius: 10px;
    border-style: none;
    cursor: pointer;
    width: 20%;
    height: 40%;
`;