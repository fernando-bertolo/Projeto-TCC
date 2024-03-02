import { useState } from "react";
import { SectionMainContent, MainContentbackground } from "../Clientes/style";

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
  const [inputNome, setInputNome] = useState();
  const [inputNacionalidade, setInputNacionalidade] = useState();
  const [inputDataNascimento, setInputDataNascimento] = useState();
  const [inputEstadoCivil, setInputEstadoCivil] = useState();
  const [inputRG, setInputRG] = useState();
  const [inputCPF, setInputCPF] = useState();
  const [inputCelular, setInputCelular] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputEndereco, setInputEndereco] = useState();
  const [inputCEP, setInputCEP] = useState();
  const [inputBairro, setInputBairro] = useState();
  const [inputNumero, setInputNumero] = useState();
  const [inputCidade, setInputCidade] = useState();
  const [inputEstado, setInputEstado] = useState();

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
                  />
                </DivInternaInput>
              </DivInput2>
            </SectionInfoEnderecoCliente>
          </MainContent>

          <DivBotoes>
            <BotaoCancelar
              onClick={() => {
                props.setModalOpenClient(false);
              }}
            >
              Cancelar
            </BotaoCancelar>
            <BotaoAdicionar>Adicionar</BotaoAdicionar>
          </DivBotoes>
        </SectionMainContent>
      </MainContentbackground>
    </>
  );
}

export default ModalClientes;
