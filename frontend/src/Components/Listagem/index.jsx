import Modal from "../Modals/Usuarios/modalUsuario.jsx";
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
  const [dataCustomerSelect, setDataCustomerSelect] = useState("");

  return (
    <>
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
                        props.rota === "usuarios" ? (
                          props.excluirUsuario(dadosUsuarioSelecionado)
                        ) : props.rota === "clientes" ? (
                          props.excluirCliente(dataCustomerSelect)
                        ) : (
                          <></>
                        )
                      }
                    />
                  </DivIcones>
                </TerceiraDivTitulo>
              </DivTitulo>
            </SectionTitulo>

            <Tabela>
              <THead>
                <Tr>
                  {props.rota === "usuarios" ? (
                    <>
                      <Th>{props.primeiraColuna}</Th>
                      <Th>{props.segundaColuna}</Th>
                      <Th>{props.terceiraColuna}</Th>
                      <Th>{props.quartaColuna}</Th>
                      <Th>{props.quintaColuna}</Th>
                    </>
                  ) : props.rota === "clientes" ? (
                    <>
                      <Th>{props.nome}</Th>
                      <Th>{props.cpf}</Th>
                      <Th>{props.email}</Th>
                      <Th>{props.celular}</Th>
                      <Th>{props.cep}</Th>
                      <Th>{props.cidade}</Th>
                      <Th>{props.estado}</Th>
                    </>
                  ) : (
                    <></>
                  )}
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
                ) : props.rota === "clientes" && props.dataCustomer ? (
                  props.dataCustomer.map((client, index) => {
                    return (
                      <TrBody
                        key={index}
                        onClick={() => {
                          setDataCustomerSelect(client);
                        }}
                        style={{
                          backgroundColor:
                            dataCustomerSelect.id === client.id
                              ? "#514869"
                              : "#2F2841",
                        }}
                      >
                        <Td>{client.nome}</Td>
                        <Td>{client.cpf}</Td>
                        <Td>{client.email}</Td>
                        <Td>{client.celular}</Td>
                        <Td>{client.cep}</Td>
                        <Td>{client.cidade}</Td>
                        <Td>{client.estado}</Td>
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
          <Modal
            setModalOpen={setModalOpen}
            titulo="Cadastro de Usuário"
            descricaoBotao="ADICIONAR"
            modo="criacao"
          />
        ) : (
          <></>
        )}

        {modalEdicaoOpen ? (
          <Modal
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
    </>
  );
}

export default Listagem;
