import styled from "styled-components";

export const DivMain = styled.div`
    width: 85vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: green;
`;

export const SectionUsuarios = styled.section`
    width: 80%;
    height: 80%;
    border-radius: 30px;
    background-color: #2F2841;
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
    height: 90%;
    border: 1px solid white;
    color: #FFF;
    border-collapse: collapse;
`;

export const THead = styled.thead`
    //height: 10%;
    background-color: aqua;
`;
export const TBody = styled.tbody`
    //height: 10%;
    background-color: red;
`;
export const Tr = styled.tr``;
export const Td = styled.td`
    padding: 8px;
`;
export const Th = styled.th`
    padding: 1px;
`;