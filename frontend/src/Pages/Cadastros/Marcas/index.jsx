import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";

import { NavigateCadastros, DivNavigate, LinkNavegacao } from "../styled.jsx";

function Marcas() {
  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavigateCadastros>
            <DivNavigate>
              <LinkNavegacao to={"/cadastros/marcas"}>Marcas</LinkNavegacao>
            </DivNavigate>
            <DivNavigate>
              <LinkNavegacao to={"/cadastros/modelos"}>Modelos</LinkNavegacao>
            </DivNavigate>
            <DivNavigate>
              <LinkNavegacao to={"/cadastros/versoes"}>Versoes</LinkNavegacao>
            </DivNavigate>
            <DivNavigate>
              <LinkNavegacao to={"/cadastros/acessorios"}>
                Acessorios
              </LinkNavegacao>
            </DivNavigate>
          </NavigateCadastros>
          <Listagem title="Marcas" />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Marcas;
