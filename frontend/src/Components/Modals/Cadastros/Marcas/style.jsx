import styled from "styled-components";

export const SectionMainContent = styled.section`
  width: 30%;
  height: 30%;
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
  height: 20%;
  //background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h2`
  color: #fff;
`;

export const DivContent = styled.div`
  width: 100%;
  height: 50%;
  //background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  color: #fff;
  margin-right: 1rem;
`;

export const Input = styled.input`
  width: 50%;
  height: 25%;
  border-radius: 10px;
  color: #fff;
  background-color: #514869;
  border-style: none;
  padding-left: 20px;

  &:focus {
    outline: none; // Retira a borda ressaltada ao clicar
  }
`;

export const DivBotoes = styled.div`
  width: 100%;
  height: 30%;
  //background-color: orange;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const BotaoAdicionar = styled.button`
  width: 25%;
  height: 50%;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  background-color: #27ff00;
`;

export const BotaoCancelar = styled.button`
  width: 25%;
  height: 50%;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  background-color: red;
`;
