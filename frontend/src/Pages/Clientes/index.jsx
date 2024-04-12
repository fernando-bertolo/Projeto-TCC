import Listagem from "../../Components/Listagem/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../../Components/Menu/index";
import { Body, DivContentCadastros } from "../../Components/BodyPages/style";

function Clientes() {
  const [dataCustomer, setDataCustomer] = useState();
  const [mensagemError, setMensagemError] = useState();

  const buscaClientes = () => {
    axios.get("http://localhost:3010/clientes").then((response) => {
      setDataCustomer(response.data);
    });
  };

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

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
        await delay(3.5);
        buscaClientes();
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

  useEffect(() => {
    buscaClientes();
  }, []);

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <Listagem
            dataCustomer={dataCustomer}
            excluirCliente={excluirCliente}
            title="Listagem de Clientes"
            rota="clientes"
            atualizaClientes={buscaClientes}
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
        </DivContentCadastros>
      </Body>
    </>
  );
}

export default Clientes;
