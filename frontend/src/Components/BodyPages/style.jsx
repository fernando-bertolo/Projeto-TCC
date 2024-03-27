import { styled } from "styled-components";

export const Body = styled.body`
  width: 100vw;
  height: 100vh;
  background-color: #201b2c;
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
  box-shadow: 0px 0px 10px #fff;

  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const DivContentCadastros = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  //background-color: red;
`;
