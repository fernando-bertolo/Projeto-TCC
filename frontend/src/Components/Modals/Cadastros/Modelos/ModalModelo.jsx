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

  const [dadosMarcas, setDadosMarcas] = useState();

  const buscaMarcas = async () => {
    const response = await axios
      .get("http://localhost:3010/visualizar-marcas")
      .then((response) => {
        setDadosMarcas(response.data);
      });

    console.log(response);
  };

  useEffect(() => {
    buscaMarcas();
  }, []);

  function teste() {
    console.log(dadosMarcas);
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
              <Label>Selecione a Marca: </Label>
              <Select name="marca" id="marca">
                <Option>teste</Option>
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
              onClick={() => {
                teste();
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
