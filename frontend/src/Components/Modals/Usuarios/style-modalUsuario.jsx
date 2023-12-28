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
    background-color: red;
`;

export const DivBotoes = styled.div`
    width: 100%;
    height: 10%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const BotaoCancelar = styled.button`
    background-color: red;
    border-radius: 10px;

`;

export const BotaoAdicionar = styled.button`
    background-color: green;
    border-radius: 10px;
`;