import { styled } from "styled-components";
import {Link} from "react-router-dom"

export const NavMenu = styled.nav`
    width: 15%;
    height: 100%;
    background-color: #2F2841;
    box-shadow: -10px 0px 20px #FFF;
`;

export const DivLogo = styled.div`
    width: 100%;
    height: 15%;
    //background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 60%;
    height: 40%;
    border-radius: 10px;
    
`;

export const SectionGeral = styled.section`
    width: 100%;
    height: 15%;
    //background-color: purple;
`;

export const DivTextoGeral = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    //background-color: blue;
`;

export const TituloDivisao = styled.p`
    color: #7176FF;
    font-size: 1vw;
`;



export const LinkNavegacao = styled(Link)`
    color: #FFF;
    font-size: 1vw;
    text-decoration: none;
`;

export const DivOpcaoGeral = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #514869;
    }
`;

export const SectionControle = styled.section`
    width: 100%;
    height: 50%;
    //background-color: red;

`;

export const DivTextoControle = styled.div`
    width: 100%;
    height: 10%;
    //background-color: pink;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
`;

export const DivOpcaoControle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:5px;

    &:hover{
        background-color: #514869;
    }
`;