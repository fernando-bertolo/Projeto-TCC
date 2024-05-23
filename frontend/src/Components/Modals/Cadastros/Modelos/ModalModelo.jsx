import {
  MainContentbackground,
  SectionMainContent,
  DivTitulo,
  Titulo,
  DivContent,
  DivContentInfo,
  Select,
  Option,
  Label,
  Input,
  DivBotoes,
  BotaoAdicionar,
  BotaoCancelar,
} from "./ModalModeloStyle";

import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function ModalModelo(props) {
  const [inputModelo, setInputModelo] = useState(
    props.modo === "edicao" ? props.dadosModeloSelecionado.nomeModelo : ""
  );

  const [dadosMarcas, setDadosMarcas] = useState([]);
  const [dadoMarcaUnica, setDadoMarcaUnica] = useState("");

  const buscaMarcas = async () => {
    await axios
      .get("http://localhost:3010/visualizar-marcas")
      .then((response) => {
        setDadosMarcas(response.data);
      });
  };

  useEffect(() => {
    buscaMarcas();
  }, []);

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const CadastroModelo = async (event) => {
    try {
      event.preventDefault();

      if (props.modo === "criacao") {
        await axios.post("http://localhost:3010/criacao-modelo", {
          nomeModelo: inputModelo,
          idMarca: dadoMarcaUnica,
        });

        // Mensagem de sucesso
        toast.success("Modelo cadastrado com sucesso!!", {
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
        props.atualizaModelos();
        props.setModalOpenModelos(false);
      } else if (props.modo === "edicao") {
        await axios.put(
          `http://localhost:3010/alterar-modelo/${props.dadosModeloSelecionado.idModelo}`,
          {
            idMarca: dadoMarcaUnica,
            nomeModelo: inputModelo,
          }
        );

        // Mensagem de sucesso
        toast.success("Modelo alterado com sucesso!!", {
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
        props.atualizaModelos();
        props.setModalEditModelos(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warn(error.response.data.Error, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <MainContentbackground>
        <SectionMainContent>
          <DivTitulo>
            <Titulo>{props.titulo}</Titulo>
          </DivTitulo>

          <DivContent>
            <DivContentInfo>
              <Label>Selecione a Marca: </Label>
              <Select
                name="marca"
                id="marca"
                onChange={(event) => setDadoMarcaUnica(event.target.value)}
              >
                <Option>Selecione</Option>
                {dadosMarcas.map((infoMarcas, index) => {
                  return (
                    <Option key={index} value={infoMarcas.idMarca}>
                      {infoMarcas.nomeMarca}
                    </Option>
                  );
                })}
              </Select>
            </DivContentInfo>
            <DivContentInfo>
              <Label>Informe o modelo: </Label>
              <Input
                type="text"
                id="nomeModelo"
                name="nomeModelo"
                value={inputModelo}
                onChange={(event) => {
                  setInputModelo(event.target.value);
                }}
              />
            </DivContentInfo>
          </DivContent>
          <DivBotoes>
            <BotaoCancelar
              onClick={() => {
                props.modo === "criacao" ? (
                  props.setModalOpenModelos(false)
                ) : props.modo === "edicao" ? (
                  props.setModalEditModelos(false)
                ) : (
                  <></>
                );
              }}
            >
              Cancelar
            </BotaoCancelar>
            <BotaoAdicionar
              type="submit"
              onClick={(event) => {
                CadastroModelo(event);
              }}
            >
              {props.botaoSubmit}
            </BotaoAdicionar>
          </DivBotoes>
          <ToastContainer />
        </SectionMainContent>
      </MainContentbackground>
    </>
  );
}

export default ModalModelo;
