import Listagem from "../../Components/Listagem/index.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Usuarios() {
  const [data, setData] = useState([]);
  const [mensagemError, setMensagemError] = useState();

  useEffect(() => {
    axios.get("http://localhost:3010/usuarios").then((response) => {
      setData(response.data);
    });
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
      <Listagem
        title="Listagem de Usuários"
        rota="usuarios"
        data={data}
        primeiraColuna="ID"
        segundaColuna="Nome"
        terceiraColuna="Usuário"
        quartaColuna="E-mail"
        quintaColuna="Permissão"
        excluirUsuario={excluirUsuario}
      />
      <ToastContainer />
    </>
  );
}

export default Usuarios;
