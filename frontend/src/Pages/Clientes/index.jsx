import Listagem from "../../Components/Listagem/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Body } from "../../Components/BodyPages/style";
import Menu from "../../Components/Menu/index";

function Clientes() {
  const [dataCustomer, setDataCustomer] = useState();
  const [mensagemError, setMensagemError] = useState();

  useEffect(() => {
    axios.get("http://localhost:3010/clientes").then((response) => {
      setDataCustomer(response.data);
    });
  }, []);

  const excluirCliente = async (cliente) => {
    try {
      if (cliente.id) {
        const response = await axios.delete(
          "http://localhost:3010/deletar-cliente/" + cliente.id,
          {
            id: cliente.id,
          }
        );
        setMensagemError(response);

        toast.success("Cliente excluído com sucesso", {
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
        toast.error("Falha ao excluir cliente", {
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
        <Listagem
          dataCustomer={dataCustomer}
          excluirCliente={excluirCliente}
          title="Listagem de Clientes"
          rota="clientes"
          nome="Nome"
          nacionalidade="Nacionalidade"
          estadoCivil="Estado Civil"
          cpf="CPF"
          email="E-mail"
          dataNascimento="Data de Nascimento"
          rg="RG"
          celular="Celular"
          cep="CEP"
          endereco="Endereço"
          bairro="Bairro"
          cidade="Cidade"
          numero="Número"
          estado="Estado"
        />
        <ToastContainer />
      </Body>
    </>
  );
}

export default Clientes;
