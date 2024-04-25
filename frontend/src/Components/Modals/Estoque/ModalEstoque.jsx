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

  const [dadosAcessorios, setDadosAcessorios] = useState([]);
  // const [dadoAcessorioSelecionado, setDadoAcessorioSelecionado] = useState([]);

  const [inputVeiculo, setInputVeiculo] = useState({
    ano: "",
    placa: "",
    combustivel: "",
    cor: "",
    quilometragem: "",
    valor: "",
    acessorios: [],
    ...(props.modo === "edicao" ? props.dadosVeiculoSelecionado : {}),
  });

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

  const buscaAcessorio = async () => {
    try {
      await axios
        .get("http://localhost:3010/visualizar-acessorio")
        .then((response) => {
          setDadosAcessorios(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaMarcas();
    buscaModelos();
    buscaVersoes();
    buscaAcessorio();
  }, []);

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const CadastrarVeiculo = async (event) => {
    try {
      event.preventDefault();
      if (props.modo === "criacao") {
        await axios.post("http://localhost:3010/criacao-veiculos", {
          idMarca: dadoMarcaUnica,
          idModelo: dadoModeloUnico,
          idVersao: dadoVersaoUnica,
          idStatus: "Em estoque",
          ano: inputVeiculo.ano,
          combustivel: inputVeiculo.combustivel,
          cor: inputVeiculo.cor,
          quilometragem: inputVeiculo.quilometragem,
          valor: inputVeiculo.valor,
          placa: inputVeiculo.placa,
          idAcessorios: inputVeiculo.acessorios,
        });

        // Mensagem de sucesso
        toast.success("Veículo cadastrado com sucesso!!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        delay(3.5);
        props.setModalOpenVeiculo(false);
        props.atualizaVeiculos();
      } else if (props.modo === "edicao") {
        await axios.put(
          `http://localhost:3010/alteracao-veiculo/${props.dadosVeiculoSelecionado.idVeiculo}`,
          {
            idMarca: dadoMarcaUnica,
            idModelo: dadoModeloUnico,
            idVersao: dadoVersaoUnica,
            idStatus: "Em estoque",
            ano: inputVeiculo.ano,
            combustivel: inputVeiculo.combustivel,
            cor: inputVeiculo.cor,
            quilometragem: inputVeiculo.quilometragem,
            valor: inputVeiculo.valor,
            placa: inputVeiculo.placa,
            acessorios: inputVeiculo.acessorios,
          }
        );

        // Mensagem de sucesso
        toast.success("Veículo alterado com sucesso!!", {
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
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.Error, {
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
                        combustivel: event.target.value,
                      });
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
                        cor: event.target.value,
                      });
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
                        quilometragem: event.target.value,
                      });
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
                        ano: event.target.value,
                      });
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
                        valor: event.target.value,
                      });
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
                        placa: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Acessórios:</Label>
                  <MultipleSelectCheckmarks
                    dadosAcessorios={dadosAcessorios}
                    setInputVeiculo={setInputVeiculo}
                    inputVeiculo={inputVeiculo}
                  ></MultipleSelectCheckmarks>
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
            <BotaoAdicionar
              type="submit"
              onClick={(event) => CadastrarVeiculo(event)}
            >
              {props.botaoSubmit}
            </BotaoAdicionar>
          </DivBotoes>
        </SectionMainContent>
        <ToastContainer />
      </MainContentbackground>
    </>
  );
}

export default EstoqueModal;
