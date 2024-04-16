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

function EstoqueModal(props) {
  const [dadosMarcas, setDadosMarcas] = useState([]);
  const [dadoMarcaUnica, setDadoMarcaUnica] = useState("");

  const [dadosModelos, setDadosModelos] = useState([]);
  const [dadoModeloUnico, setDadoModeloUnico] = useState("");

  const [dadosVersoes, setDadosVersoes] = useState([]);
  const [dadoVersaoUnica, setDadoVersaoUnica] = useState("");

  const [inputVeiculo, setInputVeiculo] = useState({
    ano: "",
    placa: "",
    combustivel: "",
    cor: "",
    quilometragem: "",
    valor: "",
    acessorios: {}
  },
  props.modo === "edicao" ? props.dadosVeiculoSelecioano : ""
)

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
                    id="combustivel"
                    name="combustivel"
                    placeholder="Digite o combustível"
                    value={inputVeiculo.combustivel}
                    onChange={(event) => {
                      setInputVeiculo({
                        ...inputVeiculo,
                        combustivel: event.target.value
                      })
                    }}
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
                    id="cor"
                    name="cor"
                    placeholder="Digite a cor"
                    value={inputVeiculo.cor}
                    onChange={(event) => {
                      setInputVeiculo({
                        ...inputVeiculo,
                        cor: event.target.value
                      })
                    }}
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
                  <Label>Quilometragem: </Label>
                  <Input2
                    type="text"
                    id="quilometragem"
                    name="quilometragem"
                    placeholder="Digite a quilometragem"
                    value={inputVeiculo.quilometragem}
                    onChange={(event) => {
                      setInputVeiculo({
                        ...inputVeiculo,
                        quilometragem: event.target.value
                      })
                    }}
                  />
                </DivInternaInput>
              </DivInput>

              <DivInput>
                <DivInternaInput>
                  <Label>Ano: </Label>
                  <Input2
                    type="text"
                    id="ano"
                    name="ano"
                    placeholder="Digite o ano"
                    value={inputVeiculo.ano}
                    onChange={(event) => {
                      setInputVeiculo({
                        ...inputVeiculo,
                        ano: event.target.value
                      })
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Valor: </Label>
                  <Input2
                    type="text"
                    id="valor"
                    name="valor"
                    placeholder="Digite o valor"
                    value={inputVeiculo.valor}
                    onChange={(event) => {
                      setInputVeiculo({
                        ...inputVeiculo,
                        valor: event.target.value
                      })
                    }}
                  />
                </DivInternaInput>
              </DivInput>

              <DivInput>
                <DivInternaInput>
                  <Label>Placa: </Label>
                  <Input2
                    type="text"
                    id="placa"
                    name="placa"
                    placeholder="Digite a placa"
                    value={inputVeiculo.placa}
                    onChange={(event) => {
                      setInputVeiculo({
                        ...inputVeiculo,
                        placa: event.target.value
                      })
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Acessórios: </Label>
                  <Input2
                    type="text"
                    id="nacionalidade"
                    name="nome"
                    placeholder="Digite a nacionalidade"
                  />
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
