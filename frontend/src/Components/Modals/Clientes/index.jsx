import { SectionMainContent, MainContentbackground } from "../Clientes/style";

import {
  DivTitulo,
  Titulo,
  MainContent,
  SectionInfoPessoalCliente,
  DivSubtituloInfoPessoalCliente,
  SubtituloInfoPessoalCliente,
  DivInput,
  DivInput2,
  DivInterna,
  Label,
  Input,
  Input2,
  InputDataNascimento,
  SectionInfoEnderecoCliente,
  BotaoCancelar,
  BotaoAdicionar,
  DivBotoes,
} from "./style";

function ModalClientes(props) {
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

              <DivInput>
                <Label>Nome: </Label>
                <Input type="text" id="nome" />
              </DivInput>

              <DivInput2>
                <DivInterna>
                  <Label>Nacionalidade: </Label>
                  <Input2 type="text" id="nome" />
                </DivInterna>

                <DivInterna>
                  <Label>Data de Nascimento: </Label>
                  <InputDataNascimento type="date" id="nome" />
                </DivInterna>
              </DivInput2>

              <DivInput2>
                <DivInterna>
                  <Label>Estado Civil:</Label>
                  <Input2 type="text" id="estadoCivil" />
                </DivInterna>

                <DivInterna>
                  <Label>RG: </Label>
                  <Input2 type="text" id="rg" />
                </DivInterna>
              </DivInput2>
            </SectionInfoPessoalCliente>
            <SectionInfoEnderecoCliente></SectionInfoEnderecoCliente>
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
