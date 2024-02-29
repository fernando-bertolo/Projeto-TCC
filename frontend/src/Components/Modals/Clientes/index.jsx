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
  Label,
  Input,
  Input2,
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
                <Label>Nome: </Label>
                <Input2 type="text" id="nome" />

                <Label>Nome: </Label>
                <Input2 type="text" id="nome" />
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
