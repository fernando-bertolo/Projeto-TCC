import Menu from "../../../Components/Menu/index";
import Listagem from "../../../Components/Listagem/index.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import {
  Body,
  DivContentCadastros,
} from "../../../Components/BodyPages/style.jsx";
import NavegacaoCadastro from "../../../Components/NavegacaoCadastros/index.jsx";

function Marcas() {
  const [dadosMarcas, setDadosMarcas] = useState();

  const buscaMarcas = async () => {
    await axios
      .get("http://localhost:3010/visualizar-marcas")
      .then((response) => {
        setDadosMarcas(response.data);
      });
  };

  const excluirMarca = async (dadosMarcas) => {
    try {
      if (dadosMarcas.idMarca) {
        await axios.delete(
          `http://localhost:3010/deletar-marca/${dadosMarcas.idMarca}`,
          {
            idMarca: dadosMarcas.idMarca,
          }
        );

        // Mensagem de sucesso
        toast.success("Marca excluída com sucesso!!", {
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
    buscaMarcas();
  }, []);

  return (
    <>
      <Body>
        <Menu />
        <DivContentCadastros>
          <NavegacaoCadastro />
          <Listagem
            title="Marcas"
            rota="marca"
            primeiraColuna="Nome"
            dadosMarcas={dadosMarcas}
            excluirMarca={excluirMarca}
            atualizaMarcas={buscaMarcas}
          />
        </DivContentCadastros>
        <ToastContainer />
      </Body>
    </>
  );
}

export default Marcas;
