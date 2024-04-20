import {
  SectionMainContent,
  MainContentbackground,
  DivTitulo,
  Titulo,
  MainContent,
  SectionInfoVeiculo,
  DivSubtituloInfoPessoalCliente,
  DivInput,
  DivInternaInput,
  Label,
  Input2,
  Select,
  Option,
  BotaoCancelar,
  BotaoAdicionar,
  DivBotoes,
} from "./ModalEstoqueStyle";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import MultipleSelectCheckmarks from "../../Select/SelectMUI";

function EstoqueModal(props) {
  const [dadosMarcas, setDadosMarcas] = useState([]);
  const [dadoMarcaUnica, setDadoMarcaUnica] = useState("");

  const [dadosModelos, setDadosModelos] = useState([]);
  const [dadoModeloUnico, setDadoModeloUnico] = useState("");

  const [dadosVersoes, setDadosVersoes] = useState([]);
  const [dadoVersaoUnica, setDadoVersaoUnica] = useState("");

  const buscaMarcas = async () => {
    await axios
      .get("http://localhost:3010/visualizar-marcas")
      .then((response) => {
        setDadosMarcas(response.data);
      });
  };

  const buscaModelos = async () => {
    await axios
      .get("http://localhost:3010/visualizar-modelos/")
      .then((response) => {
        setDadosModelos(response.data);
      });
  };

  const buscaVersoes = async () => {
    await axios
      .get("http://localhost:3010/visualizar-versao")
      .then((response) => {
        setDadosVersoes(response.data);
      });
  };

  useEffect(() => {
    buscaMarcas();
    buscaModelos();
    buscaVersoes();
  }, []);

  return (
    <>
      <MainContentbackground>
        <SectionMainContent>
          <DivTitulo>
            <Titulo>{props.titulo}</Titulo>
          </DivTitulo>

          <MainContent>
            <SectionInfoVeiculo>
              <DivSubtituloInfoPessoalCliente></DivSubtituloInfoPessoalCliente>

              <DivInput>
                <DivInternaInput>
                  <Label>Marca: </Label>
                  <Select
                    type="text"
                    id="marca"
                    name="marca"
                    onChange={(event) => setDadoMarcaUnica(event.target.value)}
                  >
                    <Option>Selecione</Option>
                    {dadosMarcas.map((infoMarcas, index) => {
                      return (
                        <>
                          <Option key={index} value={infoMarcas.idMarca}>
                            {infoMarcas.nomeMarca}
                          </Option>
                        </>
                      );
                    })}
                  </Select>
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Combustível: </Label>
                  <Input2
                    type="text"
                    id="nacionalidade"
                    name="nome"
                    placeholder="Digite a nacionalidade"
                  />
                </DivInternaInput>
              </DivInput>

              <DivInput>
                <DivInternaInput>
                  <Label>Modelo: </Label>
                  <Select
                    type="text"
                    id="modelo"
                    name="modelo"
                    onChange={(event) => setDadoModeloUnico(event.target.value)}
                  >
                    <Option>Selecione</Option>
                    {dadosModelos.map((infoModelo, index) => {
                      return (
                        <>
                          <Option key={index} value={infoModelo.idModelo}>
                            {infoModelo.nomeModelo}
                          </Option>
                        </>
                      );
                    })}
                  </Select>
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Cor: </Label>
                  <Input2
                    type="text"
                    id="nacionalidade"
                    name="nome"
                    placeholder="Digite a nacionalidade"
                  />
                </DivInternaInput>
              </DivInput>

              <DivInput>
                <DivInternaInput>
                  <Label>Versão: </Label>
                  <Select
                    type="text"
                    id="versao"
                    name="versao"
                    onChange={(event) => setDadoVersaoUnica(event.target.value)}
                  >
                    <Option>Selecione</Option>
                    {dadosVersoes.map((infoVersao, index) => {
                      return (
                        <>
                          <Option key={index} value={infoVersao.idVersao}>
                            {infoVersao.nomeVersao}
                          </Option>
                        </>
                      );
                    })}
                  </Select>
                </DivInternaInput>

                <DivInternaInput>
                  <Label>KM: </Label>
                  <Input2
                    type="text"
                    id="nacionalidade"
                    name="nome"
                    placeholder="Digite a nacionalidade"
                  />
                </DivInternaInput>
              </DivInput>

              <DivInput>
                <DivInternaInput>
                  <Label>Ano: </Label>
                  <Input2
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite o nome"
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Valor: </Label>
                  <Input2
                    type="text"
                    id="nacionalidade"
                    name="nome"
                    placeholder="Digite a nacionalidade"
                  />
                </DivInternaInput>
              </DivInput>

              <DivInput>
                <DivInternaInput>
                  <Label>Placa: </Label>
                  <Input2
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite o nome"
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Acessórios: </Label>
                  <MultipleSelectCheckmarks></MultipleSelectCheckmarks>
                </DivInternaInput>
              </DivInput>
            </SectionInfoVeiculo>
          </MainContent>

          <DivBotoes>
            <BotaoCancelar
              onClick={() => {
                props.modo === "criacao" ? (
                  props.setModalOpenVeiculo(false)
                ) : props.modo === "edicao" ? (
                  props.setModalEditVeiculo(false)
                ) : (
                  <></>
                );
              }}
            >
              Cancelar
            </BotaoCancelar>
            <BotaoAdicionar type="submit">{props.botaoSubmit}</BotaoAdicionar>
          </DivBotoes>
        </SectionMainContent>
        <ToastContainer />
      </MainContentbackground>
    </>
  );
}

export default EstoqueModal;
