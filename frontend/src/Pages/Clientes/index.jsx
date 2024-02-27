import Listagem from "../../Components/Listagem/index.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

function Clientes() {
  const [dataCustomer, setDataCustomer] = useState();

  useEffect(() => {
    axios.get("http://localhost:3010/clientes").then((response) => {
      setDataCustomer(response.data);
    });
  }, []);

  return (
    <>
      <Listagem
        dataCustomer={dataCustomer}
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
    </>
  );
}

export default Clientes;
