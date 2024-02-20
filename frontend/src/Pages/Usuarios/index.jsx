import Listagem from "../../Components/Form/index.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function Usuarios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3010/usuarios").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Listagem
        title="Listagem de Usuario"
        data={data}
        primeiraColuna="ID"
        segundaColuna="Nome"
        terceiraColuna="Usuário"
        quartaColuna="E-mail"
        quintaColuna="Permissão"
      />
    </>
  );
}

export default Usuarios;
