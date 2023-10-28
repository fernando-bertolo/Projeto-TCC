import styled from "styled-components";

export const Body = styled.body`
    width: 100vw;
    height: 100vh;
    background-color: #201B2C;
    display: flex;
`;

export const SectionAutenticacao = styled.section`
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