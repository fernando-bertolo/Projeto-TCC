import Menu from "../../Components/Menu/index.jsx";
import {
  Body,
  DivContentCadastros,
} from "../../Components/BodyPages/style.jsx";

import NavegacaoCadastros from "../../Components/NavegacaoCadastros/index.jsx";

function Cadastros() {
  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavegacaoCadastros />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Cadastros;
