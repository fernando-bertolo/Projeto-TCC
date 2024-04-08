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
} from "./ModalVersaoStyle";

import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function ModalVersao(props) {
  const [dadosModelos, setDadosModelos] = useState([]);
  const [dadoModeloUnico, setDadoModeloUnico] = useState("");
  const [inputVersao, setInputVersao] = useState(
    props.modo === "edicao" ? props.dadosVersaoSelecionada.nomeVersao : ""
  );

  const buscaModelos = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-modelos/")
        .then((response) => {
          setDadosModelos(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaModelos();
  }, []);

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const CadastraVersao = async (event) => {
    try {
      event.preventDefault();
      

      if(props.rota === "criacao") {

        console.log("teste")
        await axios.post("http://localhost:3010/criacao-versao", {
          idModelo: dadoModeloUnico,
          idMarca: dadosModelos[0].idMarca,
          nomeVersao: inputVersao
        })

        // Mensagem de sucesso
        toast.success("Versão cadastrado com sucesso!!", {
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
        props.setModalOpenVersao(false);
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
  }

  return (
    <>
      <MainContentbackground>
        <SectionMainContent>
          <DivTitulo>
            <Titulo>{props.titulo}</Titulo>
          </DivTitulo>

          <DivContent>
            <DivContentInfo>
              <Label>Selecione o Modelo: </Label>
              <Select
                name="modelo"
                id="modelo"
                onChange={(event) => setDadoModeloUnico(event.target.value)}
              >
                <Option>Selecione</Option>
                {dadosModelos.map((infoModelos, index) => {
                  return (
                    <Option key={index} value={infoModelos.idModelo}>
                      {infoModelos.nomeModelo}
                    </Option>
                  );
                })}
              </Select>
            </DivContentInfo>
            <DivContentInfo>
              <Label>Informe a Versão: </Label>
              <Input
                type="text"
                id="nomeVersao"
                name="nomeVersao"
                value={inputVersao}
                onChange={(event) => setInputVersao(event.target.value)}
              />
            </DivContentInfo>
          </DivContent>
          <DivBotoes>
            <BotaoCancelar
              onClick={() => {
                props.modo === "criacao" ? (
                  props.setModalOpenVersao(false)
                ) : props.modo === "edicao" ? (
                  props.setModalEditVersao(false)
                ) : (
                  <></>
                );
              }}
            >
              Cancelar
            </BotaoCancelar>
            <BotaoAdicionar type="submit" onClick={(event) => CadastraVersao(event)}>{props.botaoSubmit}</BotaoAdicionar>
          </DivBotoes>
          <ToastContainer />
        </SectionMainContent>
      </MainContentbackground>
    </>
  );
}

export default ModalVersao;
