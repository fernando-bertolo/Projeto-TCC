import { useState } from "react";
import { SectionMainContent, MainContentbackground } from "../Clientes/style";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import validaCPF from "../../../Services/CPF/validaCPF";
import axios from "axios";

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
  const [inputNome, setInputNome] = useState(
    props.modo === "edicao" ? props.dadosClientes.nome : ""
  );
  const [inputNacionalidade, setInputNacionalidade] = useState(
    props.modo === "edicao" ? props.dadosClientes.nacionalidade : ""
  );
  const [inputDataNascimento, setInputDataNascimento] = useState(
    props.modo === "edicao" ? props.dadosClientes.dataNascimento : ""
  );
  const [inputEstadoCivil, setInputEstadoCivil] = useState(
    props.modo === "edicao" ? props.dadosClientes.estadoCivil : ""
  );
  const [inputRG, setInputRG] = useState(
    props.modo === "edicao" ? props.dadosClientes.rg : ""
  );
  const [inputCPF, setInputCPF] = useState(
    props.modo === "edicao" ? props.dadosClientes.cpf : ""
  );
  const [inputCelular, setInputCelular] = useState(
    props.modo === "edicao" ? props.dadosClientes.celular : ""
  );
  const [inputEmail, setInputEmail] = useState(
    props.modo === "edicao" ? props.dadosClientes.email : ""
  );
  const [inputEndereco, setInputEndereco] = useState(
    props.modo === "edicao" ? props.dadosClientes.endereco : ""
  );
  const [inputCEP, setInputCEP] = useState(
    props.modo === "edicao" ? props.dadosClientes.cep : ""
  );
  const [inputBairro, setInputBairro] = useState(
    props.modo === "edicao" ? props.dadosClientes.bairro : ""
  );
  const [inputNumero, setInputNumero] = useState(
    props.modo === "edicao" ? props.dadosClientes.numero : ""
  );
  const [inputCidade, setInputCidade] = useState(
    props.modo === "edicao" ? props.dadosClientes.cidade : ""
  );
  const [inputEstado, setInputEstado] = useState(
    props.modo === "edicao" ? props.dadosClientes.estado : ""
  );

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
          await delay(3.5); // espera 4 segundos
          props.atualizaClientes();
          props.setModalOpenClient(false); //Fecha o modal
        }
      } else if (props.modo === "edicao") {
        if (!validator.isEmail(inputEmail)) {
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
              nome: inputNome,
              nacionalidade: inputNacionalidade,
              dataNascimento: inputDataNascimento,
              rg: inputRG,
              estadoCivil: inputEstadoCivil,
              celular: inputCelular,
              email: inputEmail,
              endereco: inputEndereco,
              cep: inputCEP,
              bairro: inputBairro,
              numero: inputNumero,
              cidade: inputCidade,
              estado: inputEstado,
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
