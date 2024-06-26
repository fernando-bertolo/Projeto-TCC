import Login from "../Pages/Login/index.jsx";
import EsquecerSenha from "../Pages/Login/EsquecerSenha/index.jsx";
import ResetarSenha from "../Pages/Login/ResetarSenha/index.jsx";
import Home from "../Pages/Home/index.jsx";
import Estoque from "../Pages/Estoque/index.jsx";
import Clientes from "../Pages/Clientes/index.jsx";
import Cadastros from "../Pages/Cadastros/index.jsx";
import Marcas from "../Pages/Cadastros/Marcas/index.jsx";
import Modelos from "../Pages/Cadastros/Modelos/index.jsx";
import Versoes from "../Pages/Cadastros/Versoes/index.jsx";
import Acessorios from "../Pages/Cadastros/Acessorios/index.jsx";
import Relatorios from "../Pages/Relatorios/index.jsx";
import Usuarios from "../Pages/Usuarios/index.jsx";
import Historico from "../Pages/Historico/index.jsx";
import ValidaAutenticacao from "../Services/validaAutenticacao.jsx";
import PageNotFound from "../Components/PageNotFound/PageNotFound.jsx";
import { Route, Routes } from "react-router-dom";

function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route path="/esquecer-senha" element={<EsquecerSenha />} />
      <Route path="/resetar-senha/:tokenSenha" element={<ResetarSenha />} />

      <Route
        path="/home"
        element={
          <ValidaAutenticacao>
            <Home />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/estoque"
        element={
          <ValidaAutenticacao>
            <Estoque />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/clientes"
        element={
          <ValidaAutenticacao>
            <Clientes />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/cadastros"
        element={
          <ValidaAutenticacao>
            <Cadastros />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/cadastros/marcas"
        element={
          <ValidaAutenticacao>
            <Marcas />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/cadastros/modelos"
        element={
          <ValidaAutenticacao>
            <Modelos />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/cadastros/versoes"
        element={
          <ValidaAutenticacao>
            <Versoes />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/cadastros/acessorios"
        element={
          <ValidaAutenticacao>
            <Acessorios />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/relatorios"
        element={
          <ValidaAutenticacao>
            <Relatorios />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/usuarios"
        element={
          <ValidaAutenticacao>
            <Usuarios />
          </ValidaAutenticacao>
        }
      />

      <Route
        path="/historico"
        element={
          <ValidaAutenticacao>
            <Historico />
          </ValidaAutenticacao>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Rotas;
