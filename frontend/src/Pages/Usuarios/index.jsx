import Listagem from "../../Components/Listagem/index.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Body, DivContentCadastros } from "../../Components/BodyPages/style";
import Menu from "../../Components/Menu/index";

function Usuarios() {
  const [data, setData] = useState([]);
  const [mensagemError, setMensagemError] = useState();

  const buscaUsuarios = () => {
    axios.get("http://localhost:3010/usuarios").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    buscaUsuarios();
  }, []);

  const excluirUsuario = async (usuario) => {
    try {
      if (usuario.id) {
        const response = await axios.delete(
          "http://localhost:3010/deletar-usuario/" + usuario.id,
          {
            id: usuario.id,
          }
        );
        setMensagemError(response);

        toast.success("Usuario excluído com sucesso", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (mensagemError === 400) {
        toast.error("Falha ao excluir usuário", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <Listagem
            title="Listagem de Usuários"
            rota="usuarios"
            atualizaUsuarios={buscaUsuarios}
            data={data}
            primeiraColuna="ID"
            segundaColuna="Nome"
            terceiraColuna="Usuário"
            quartaColuna="E-mail"
            quintaColuna="Permissão"
            excluirUsuario={excluirUsuario}
          />
          <ToastContainer />
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Usuarios;
