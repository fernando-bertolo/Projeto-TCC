import { useState } from "react";
import { SectionMainContent, MainContentbackground } from "../Clientes/style";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import validaCPF from "../../../Services/CPF/validaCPF";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
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
  const [inputNome, setInputNome] = useState("");
  const [inputNacionalidade, setInputNacionalidade] = useState("");
  const [inputDataNascimento, setInputDataNascimento] = useState("");
  const [inputEstadoCivil, setInputEstadoCivil] = useState("");
  const [inputRG, setInputRG] = useState("");
  const [inputCPF, setInputCPF] = useState("");
  const [inputCelular, setInputCelular] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputEndereco, setInputEndereco] = useState("");
  const [inputCEP, setInputCEP] = useState("");
  const [inputBairro, setInputBairro] = useState("");
  const [inputNumero, setInputNumero] = useState("");
  const [inputCidade, setInputCidade] = useState("");
  const [inputEstado, setInputEstado] = useState("");

  const navigate = useNavigate();

  const criacaoCliente = async (event) => {
    try {
      event.preventDefault();

      if (props.modo === "criacao") {
        if (!validaCPF(inputCPF)) {
          toast.warn("CPF inválido", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (!validator.isEmail(inputEmail)) {
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
        } else if (inputEstadoCivil === "") {
          toast.warn("Estado civil esta em branco!!", {
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
            nome: inputNome,
            nacionalidade: inputNacionalidade,
            dataNascimento: inputDataNascimento,
            rg: inputRG,
            estadoCivil: inputEstadoCivil,
            cpf: inputCPF,
            celular: inputCelular,
            email: inputEmail,
            endereco: inputEndereco,
            cep: inputCEP,
            bairro: inputBairro,
            numero: inputNumero,
            cidade: inputCidade,
            estado: inputEstado,
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
          navigate("/clientes");
        }
      }
    } catch (error) {
      if (error.response === 400) {
        toast.error("Não foi possível cadastrar o cliente!!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.warn("CPF já cadastrado no sistema", {
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
                    value={inputNome}
                    onChange={(event) => {
                      setInputNome(event.target.value);
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
                    value={inputNacionalidade}
                    onChange={(event) => {
                      setInputNacionalidade(event.target.value);
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
                    value={inputDataNascimento}
                    onChange={(event) => {
                      setInputDataNascimento(event.target.value);
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
                    value={inputEstadoCivil}
                    onChange={(event) => {
                      setInputEstadoCivil(event.target.value);
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
                    value={inputRG}
                    onChange={(event) => {
                      setInputRG(event.target.value);
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
                    value={inputCPF}
                    onChange={(event) => {
                      setInputCPF(event.target.value);
                    }}
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
                    value={inputCelular}
                    onChange={(event) => {
                      setInputCelular(event.target.value);
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
                    value={inputEmail}
                    onChange={(event) => {
                      setInputEmail(event.target.value);
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
                  <Label>Endereço: </Label>
                  <Input2
                    type="text"
                    id="endereco"
                    name="endereco"
                    placeholder="Digite o endereço"
                    value={inputEndereco}
                    onChange={(event) => {
                      setInputEndereco(event.target.value);
                    }}
                  />
                </DivInternaInput>

                <DivInternaInput>
                  <Label>CEP: </Label>
                  <Input2
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="Digite o CEP"
                    value={inputCEP}
                    onChange={(event) => {
                      setInputCEP(event.target.value);
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
                    value={inputBairro}
                    onChange={(event) => {
                      setInputBairro(event.target.value);
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
                    value={inputNumero}
                    onChange={(event) => {
                      setInputNumero(event.target.value);
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
                    value={inputCidade}
                    onChange={(event) => {
                      setInputCidade(event.target.value);
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
                    value={inputEstado}
                    onChange={(event) => {
                      setInputEstado(event.target.value);
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
                  props.setModalEditClient(false)
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
              Adicionar
            </BotaoAdicionar>
          </DivBotoes>
        </SectionMainContent>
        <ToastContainer />
      </MainContentbackground>
    </>
  );
}

export default ModalClientes;
