import { useState, useEffect } from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import validaCPF from "../../../Services/CPF/validaCPF";
import axios from "axios";

import {
  SectionMainContent,
  MainContentbackground,
  DivTitulo,
  Titulo,
  MainContent,
  SectionInfoPessoalCliente,
  DivSubtituloInfoPessoalCliente,
  SubtituloInfoPessoalCliente,
  DivInput2,
  DivInternaInput,
  Label,
  Input2,
  SectionInfoEnderecoCliente,
  BotaoCancelar,
  BotaoAdicionar,
  DivBotoes,
} from "./style";

function ModalClientes(props) {
  const [dataInputs, setDataInputs] = useState({
    nome: "",
    nacionalidade: "",
    dataNascimento: "",
    estadoCivil: "",
    rg: "",
    cpf: "",
    celular: "",
    email: "",
    endereco: "",
    cep: "",
    bairro: "",
    numero: "",
    cidade: "",
    estado: "",
  });

  useEffect(() => {
    if (props.modo === "edicao" && props.dadosClientes) {
      setDataInputs({
        nome: props.dadosClientes.nome,
        nacionalidade: props.dadosClientes.nacionalidade,
        dataNascimento: props.dadosClientes.dataNascimento,
        estadoCivil: props.dadosClientes.estadoCivil,
        rg: props.dadosClientes.rg,
        cpf: props.dadosClientes.cpf,
        celular: props.dadosClientes.celular,
        email: props.dadosClientes.email,
        endereco: props.dadosClientes.endereco,
        cep: props.dadosClientes.cep,
        bairro: props.dadosClientes.bairro,
        numero: props.dadosClientes.numero,
        cidade: props.dadosClientes.cidade,
        estado: props.dadosClientes.estado,
      });
    }
  }, [props.modo, props.dadosClientes]);

  const buscaCEP = (event) => {
    try {
      const cep = event.target.value.replace(/\D/g, "");
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setDataInputs({
            ...dataInputs,
            endereco: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const criacaoCliente = async (event) => {
    try {
      event.preventDefault();

      if (props.modo === "criacao") {
        if (!validator.isEmail(dataInputs.email)) {
          toast.warn("E-mail inválido", {
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
          await axios.post("http://localhost:3010/criacao-clientes", {
            nome: dataInputs.nome,
            nacionalidade: dataInputs.nacionalidade,
            dataNascimento: dataInputs.dataNascimento,
            rg: dataInputs.rg,
            estadoCivil: dataInputs.estadoCivil,
            cpf: dataInputs.cpf,
            celular: dataInputs.celular,
            email: dataInputs.email,
            endereco: dataInputs.endereco,
            cep: dataInputs.cep,
            bairro: dataInputs.bairro,
            numero: dataInputs.numero,
            cidade: dataInputs.cidade,
            estado: dataInputs.estado,
          });

          // Mensagem de sucesso
          toast.success("Cliente cadastrado com sucesso!!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          await delay(3.5); // espera 4 segundos
          props.atualizaClientes();
          props.setModalOpenClient(false); //Fecha o modal
        }
      } else if (props.modo === "edicao") {
        if (!validator.isEmail(dataInputs.email)) {
          toast.warn("E-mail inválido", {
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
          await axios.put(
            `http://localhost:3010/alterar-cliente/${props.dadosClientes.id}`,
            {
              nome: dataInputs.nome,
              nacionalidade: dataInputs.nacionalidade,
              dataNascimento: dataInputs.dataNascimento,
              rg: dataInputs.rg,
              estadoCivil: dataInputs.estadoCivil,
              celular: dataInputs.celular,
              email: dataInputs.email,
              endereco: dataInputs.endereco,
              cep: dataInputs.cep,
              bairro: dataInputs.bairro,
              numero: dataInputs.numero,
              cidade: dataInputs.cidade,
              estado: dataInputs.estado,
            }
          );

          toast.success("Cliente alterado com sucesso", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          props.atualizaClientes();
          await delay(3.5); // espera 4 segundos
          props.setModalEditClient(false); //Fecha o modal
        }
      }
    } catch (error) {
      if (
        (error.response && error.response.status === 400) ||
        (error.response && error.response.status === 500)
      ) {
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
            <SectionInfoPessoalCliente>
              <DivSubtituloInfoPessoalCliente>
                <SubtituloInfoPessoalCliente>
                  Dados Pessoais
                </SubtituloInfoPessoalCliente>
              </DivSubtituloInfoPessoalCliente>

              <DivInput2>
                <DivInternaInput>
                  <Label>Nome: </Label>
                  <Input2
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite o nome"
                    value={dataInputs.nome}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        nome: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Nacionalidade: </Label>
                  <Input2
                    type="text"
                    id="nacionalidade"
                    name="nome"
                    placeholder="Digite a nacionalidade"
                    value={dataInputs.nacionalidade}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        nacionalidade: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>
              </DivInput2>

              <DivInput2>
                <DivInternaInput>
                  <Label>Data de nascimento: </Label>
                  <Input2
                    type="date"
                    id="dataNascimento"
                    name="dataNascimento"
                    value={dataInputs.dataNascimento}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        dataNascimento: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Estado Civil: </Label>
                  <Input2
                    type="text"
                    id="estadoCivil"
                    name="estadoCivil"
                    placeholder="Digite o estado civil"
                    value={dataInputs.estadoCivil}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        estadoCivil: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>
              </DivInput2>

              <DivInput2>
                <DivInternaInput>
                  <Label>RG: </Label>
                  <Input2
                    type="text"
                    id="rg"
                    name="rg"
                    placeholder="Digite o RG"
                    required
                    value={dataInputs.rg}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        rg: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>CPF: </Label>
                  <Input2
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    placeholder="Digite o CPF"
                    value={dataInputs.cpf}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        cpf: event.target.value,
                      });
                    }}
                    readOnly={props.modo === "edicao"}
                  />
                </DivInternaInput>
              </DivInput2>

              <DivInput2>
                <DivInternaInput>
                  <Label>Celular: </Label>
                  <Input2
                    type="text"
                    id="celular"
                    name="celular"
                    placeholder="Digite o celular"
                    value={dataInputs.celular}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        celular: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>E-mail: </Label>
                  <Input2
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite o e-mail"
                    value={dataInputs.email}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        email: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>
              </DivInput2>
            </SectionInfoPessoalCliente>

            <SectionInfoEnderecoCliente>
              <DivSubtituloInfoPessoalCliente>
                <SubtituloInfoPessoalCliente>
                  Dados residenciais
                </SubtituloInfoPessoalCliente>
              </DivSubtituloInfoPessoalCliente>

              <DivInput2>
                <DivInternaInput>
                  <Label>CEP: </Label>
                  <Input2
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="Digite o CEP"
                    value={dataInputs.cep}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        cep: event.target.value,
                      });
                    }}
                    onBlur={buscaCEP}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Endereço: </Label>
                  <Input2
                    type="text"
                    id="endereco"
                    name="endereco"
                    placeholder="Digite o endereço"
                    value={dataInputs.endereco}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        endereco: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>
              </DivInput2>

              <DivInput2>
                <DivInternaInput>
                  <Label>Bairro: </Label>
                  <Input2
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Digite o bairro"
                    value={dataInputs.bairro}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        bairro: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Número: </Label>
                  <Input2
                    type="text"
                    id="numero"
                    name="numero"
                    placeholder="Digite o número da residência"
                    value={dataInputs.numero}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        numero: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>
              </DivInput2>

              <DivInput2>
                <DivInternaInput>
                  <Label>Cidade: </Label>
                  <Input2
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Digite o nome da cidade"
                    value={dataInputs.cidade}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        cidade: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>Estado: </Label>
                  <Input2
                    type="text"
                    id="estado"
                    name="estado"
                    placeholder="Digite o Estado"
                    value={dataInputs.estado}
                    onChange={(event) => {
                      setDataInputs({
                        ...dataInputs,
                        estado: event.target.value,
                      });
                    }}
                  />
                </DivInternaInput>
              </DivInput2>
            </SectionInfoEnderecoCliente>
          </MainContent>

          <DivBotoes>
            <BotaoCancelar
              onClick={() => {
                props.modo === "criacao" ? (
                  props.setModalOpenClient(false)
                ) : props.modo === "edicao" ? (
                  props.setModalEditClient(false)
                ) : (
                  <></>
                );
              }}
            >
              Cancelar
            </BotaoCancelar>
            <BotaoAdicionar
              type="submit"
              onClick={(event) => criacaoCliente(event)}
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

export default ModalClientes;
