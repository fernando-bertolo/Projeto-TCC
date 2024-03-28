import { NavigateCadastros, DivNavigate, LinkNavegacao } from "./style.jsx";

function NavegacaoCadastros({ props }) {
  return (
    <>
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
          <LinkNavegacao to={"/cadastros/acessorios"}>Acessorios</LinkNavegacao>
        </DivNavigate>
      </NavigateCadastros>
    </>
  );
}

export default NavegacaoCadastros;
