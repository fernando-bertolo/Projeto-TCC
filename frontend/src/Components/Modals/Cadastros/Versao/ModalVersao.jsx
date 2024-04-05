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
              <Input type="text" id="nomeVersao" name="nomeVersao" />
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
            <BotaoAdicionar type="submit">{props.botaoSubmit}</BotaoAdicionar>
          </DivBotoes>
          <ToastContainer />
        </SectionMainContent>
      </MainContentbackground>
    </>
  );
}

export default ModalVersao;
