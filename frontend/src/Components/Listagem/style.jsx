import { styled } from "styled-components";
import { GrAddCircle } from "react-icons/gr";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

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
  background-color: #2f2841;
  border: 1px solid white;
  border-radius: 30px;
  overflow-y: scroll;
`;

export const SectionTitulo = styled.div`
  width: 100%;
  height: 10%;
  //background-color: blue;
  display: flex;
  justify-content: flex;
  align-items: center;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 1.5vw;
`;

export const DivTitulo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: #6efa88;
`;

export const PrimeiraDivTitulo = styled.div`
  height: 100%;
  width: 20%;
  //background-color: red;
  display: flex;
`;

export const SegundaDivTitulo = styled.div`
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
  //background-color: pink;
  display: flex;
`;

export const TerceiraDivTitulo = styled.div`
  height: 100%;
  width: 20%;
  //background-color: orange;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DivIcones = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //gap: 10px;
  //background-color: purple;
  //align-self: center;
`;

export const IconeAdicionar = styled(GrAddCircle)`
  width: 2vw;
  height: 3vh;
  color: #4dca4d;
  cursor: pointer;
`;

export const IconeEditar = styled(FaRegPenToSquare)`
  width: 2vw;
  height: 2.6vh;
  color: yellow;
  cursor: pointer;
`;

export const IconeExcluir = styled(IoMdCloseCircleOutline)`
  width: 2vw;
  height: 3vh;
  color: red;
  cursor: pointer;
`;

export const Tabela = styled.table`
  width: 100%;
  //border: 1px solid white;
  border-bottom: none;
  color: #fff;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: #7176ff;
`;
export const Th = styled.th`
  padding: 1.1rem;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  font-size: 1vw;
`;
export const Tr = styled.tr``;

export const TrBody = styled.tr`
  &&:hover {
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
