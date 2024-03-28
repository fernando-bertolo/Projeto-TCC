import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";

import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";

function Versoes() {
  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavegacaoCadastro />
          <Listagem title="Versoes" />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Versoes;
