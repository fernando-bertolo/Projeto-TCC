import { styled } from "styled-components";

export const SectionMainContent = styled.section`
  width: 70%;
  height: 80%;
  position: fixed;
  background-color: #2f2841;
  border-radius: 30px;
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
  background-color: rgb(255, 255, 255, 0.4);
`;

export const DivTitulo = styled.div`
  width: 100%;
  height: 10%;
  //background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: clamp(1.2vw, 1.5vw, 1.7vw);
`;

export const MainContent = styled.section`
  width: 100%;
  height: 80%;
  //background-color: pink;
`;

export const DivBotoes = styled.div`
  width: 100%;
  height: 10%;
  //background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50%;
`;

export const SectionInfoPessoalCliente = styled.section`
  width: 100%;
  height: 50%;
  //background-color: aqua;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DivSubtituloInfoPessoalCliente = styled.div`
  width: 100%;
  height: 15%;
  //background-color: gold;
  padding-left: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SubtituloInfoPessoalCliente = styled.h3`
  color: #7176ff;
  font-size: clamp(1vw, 1.1vw, 1.2vw);
`;

export const SectionInfoEnderecoCliente = styled.section`
  width: 100%;
  height: 50%;
  //background-color: red;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #fff;
  margin-right: 1rem;
`;

export const DivInput2 = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //background-color: #e939e9;
`;

export const DivInternaInput = styled.div`
  width: 60%;
  height: 100%;
  //background-color: yellow;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Input2 = styled.input`
  width: 67%;
  height: 50%;
  border-radius: 10px;
  color: #fff;
  background-color: #514869;
  border-style: none;
  padding-left: 20px;

  &:focus {
    outline: none; // Retira a borda ressaltada ao clicar
  }
`;

export const BotaoCancelar = styled.button`
  background-color: red;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  width: 10%;
  height: 50%;
`;

export const BotaoAdicionar = styled.button`
  background-color: green;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  width: 10%;
  height: 50%;
`;
