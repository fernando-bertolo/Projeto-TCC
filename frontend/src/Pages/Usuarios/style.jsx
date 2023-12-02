import styled from "styled-components";

export const DivMain = styled.div`
    width: 85vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: green;
`;

export const SectionUsuariosExternos = styled.section`
    width: 80%;
    height: 80%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

export const SectionUsuarios = styled.section`
    width: 100%;
    height: 100%;
    background-color: #2F2841;
    border: 1px solid white;
    border-radius: 30px;
    overflow-y: scroll;
`;

export const DivTitulo = styled.div`
    width: 100%;
    height: 10%;
    //background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.p`
    color: #FFF;
    font-size: 2vw;
`;

export const Tabela = styled.table`
    width: 100%;
    //border: 1px solid white;
    border-bottom: none;
    color: #FFF;
    border-collapse: collapse;
`;

export const THead = styled.thead`
    background-color: #7176FF;
`;
export const Th = styled.th`
    padding: 20px;
    //border-right: 1px solid white;
    border-bottom: 1px solid white;
    font-size: 1vw;
`;
export const Tr = styled.tr``;

export const TrBody = styled.tr`
    &&:hover{
        background-color: #514869;
    }
`;
export const TBody = styled.tbody`
    text-align: center;
`;
export const Td = styled.td`
    margin-top: 10px;
    //border-right: 1px solid white;
    padding: 20px;
`;
