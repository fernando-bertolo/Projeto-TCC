import { Body } from "../BodyPages/style.jsx";
import Menu from "../Menu/index.jsx";
import ModalUser from "../Modals/Usuarios/modalUsuario.jsx";
import { useState } from "react";

import {
  DivMain,
  SectionUsuarios,
  SectionTitulo,
  DivTitulo,
  Titulo,
  Tabela,
  Tr,
  Td,
  Th,
  THead,
  TBody,
  TrBody,
  SectionUsuariosExternos,
  IconeAdicionar,
  IconeEditar,
  IconeExcluir,
  DivIcones,
  PrimeiraDivTitulo,
  SegundaDivTitulo,
  TerceiraDivTitulo,
} from "./style.jsx";

function Listagem(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEdicaoOpen, setModalEdicaoOpen] = useState(false);
  const [dadosUsuarioSelecionado, setDadosUsuarioSelecionado] = useState("");

  return (
    <>
      <Body>
        <Menu />
        <DivMain>
          <SectionUsuariosExternos>
            <SectionUsuarios>
              <SectionTitulo>
                <DivTitulo>
                  <PrimeiraDivTitulo></PrimeiraDivTitulo>
                  <SegundaDivTitulo>
                    <Titulo>{props.title}</Titulo>
                  </SegundaDivTitulo>

                  <TerceiraDivTitulo>
                    <DivIcones>
                      <IconeAdicionar
                        onClick={() => {
                          setModalOpen(true);
                        }}
                      />
                      <IconeEditar
                        onClick={() => {
                          setModalEdicaoOpen(true);
                        }}
                      />
                      <IconeExcluir
                        onClick={() =>
                          props.excluirUsuario(dadosUsuarioSelecionado)
                        }
                      />
                    </DivIcones>
                  </TerceiraDivTitulo>
                </DivTitulo>
              </SectionTitulo>

              <Tabela>
                <THead>
                  <Tr>
                    <Th>{props.primeiraColuna}</Th>
                    <Th>{props.segundaColuna}</Th>
                    <Th>{props.terceiraColuna}</Th>
                    <Th>{props.quartaColuna}</Th>
                    <Th>{props.quintaColuna}</Th>
                  </Tr>
                </THead>
                <TBody>
                  {props.rota === "usuarios" ? (
                    props.data.map((usuario, index) => {
                      return (
                        <TrBody
                          key={index}
                          onClick={() => {
                            setDadosUsuarioSelecionado(usuario);
                          }}
                          style={{
                            backgroundColor:
                              dadosUsuarioSelecionado.id === usuario.id
                                ? "#514869"
                                : "#2F2841",
                          }}
                        >
                          <Td>{usuario.id}</Td>
                          <Td>{usuario.nome}</Td>
                          <Td>{usuario.usuario}</Td>
                          <Td>{usuario.email}</Td>
                          <Td>{usuario.permissao}</Td>
                        </TrBody>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </TBody>
              </Tabela>
            </SectionUsuarios>
          </SectionUsuariosExternos>
          {modalOpen ? (
            <ModalUser
              setModalOpen={setModalOpen}
              titulo="Cadastro de Usuário"
              descricaoBotao="ADICIONAR"
              modo="criacao"
            />
          ) : (
            <></>
          )}

          {modalEdicaoOpen ? (
            <ModalUser
              setModalOpen={setModalEdicaoOpen}
              titulo="Edição de Usuários"
              descricaoBotao="ALTERAR"
              dadosUsuarios={dadosUsuarioSelecionado}
              modo="edicao"
            />
          ) : (
            <></>
          )}
        </DivMain>
      </Body>
    </>
  );
}

export default Listagem;