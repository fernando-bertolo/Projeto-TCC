import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavigateCadastros = styled.nav`
  width: 100%;
  height: 10%;
  //background-color: orange;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left: 4rem;
`;

export const DivNavigate = styled.div`
  width: 10%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #514869;
`;

export const LinkNavegacao = styled(Link)`
  color: #fff;
  font-size: 1vw;
  text-decoration: none;
`;
