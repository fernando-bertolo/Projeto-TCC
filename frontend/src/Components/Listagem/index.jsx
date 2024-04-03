import ModalUsuario from "../Modals/Usuarios/index";
import ModalClientes from "../Modals/Clientes/index";
import ModalMarca from "../Modals/Cadastros/Marcas/index";
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
  //Modal Usuario
  const [modalOpenUser, setModalOpenUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);
  //Dados Usuarios
  const [dadosUsuarioSelecionado, setDadosUsuarioSelecionado] = useState("");

  //Modal Cliente
  const [modalOpenClient, setModalOpenClient] = useState(false);
  const [modalEditClient, setModalEditClient] = useState(false);
  // Dados Cliente
  const [dataCustomerSelect, setDataCustomerSelect] = useState("");

  //Modal Marcas
  const [modalOpenMarcas, setModalOpenMarcas] = useState("");
  const [modalEditMarcas, setModalEditMarcas] = useState("");
  //Dados Marcas
  const [dadoMarcaSelecionada, setDadoMarcaSelecionada] = useState("");

  //Modal Modelos
  const [modalOpenModelos, setModalOpenModelos] = useState("");
  const [modalEditModelos, setModalEditModelos] = useState("");

  //Dados Modelos
  const [dadosModeloSelecionado, setDadosModeloSelecionado] = useState("");

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
                      onClick={() =>
                        props.rota === "usuarios" ? (
                          setModalOpenUser(true)
                        ) : props.rota === "clientes" ? (
                          setModalOpenClient(true)
                        ) : props.rota === "marca" ? (
                          setModalOpenMarcas(true)
                        ) : (
                          <></>
                        )
                      }
                    />
                    <IconeEditar
                      onClick={() => {
                        props.rota === "usuarios" ? (
                          setModalEditUser(true)
                        ) : props.rota === "clientes" ? (
                          setModalEditClient(true)
                        ) : props.rota === "marca" ? (
                          setModalEditMarcas(true)
                        ) : (
                          <></>
                        );
                      }}
                    />
                    <IconeExcluir
                      onClick={() =>
                        props.rota === "usuarios" ? (
                          props.excluirUsuario(dadosUsuarioSelecionado)
                        ) : props.rota === "clientes" ? (
                          props.excluirCliente(dataCustomerSelect)
                        ) : props.rota === "marca" ? (
                          props.excluirMarca(dadoMarcaSelecionada)
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
                  ) : props.rota === "marca" ? (
                    <>
                      <Th>{props.primeiraColuna}</Th>
                    </>
                  ) : props.rota === "modelo" ? (
                    <>
                      <Th>{props.primeiraColuna}</Th>
                      <Th>{props.segundaColuna}</Th>
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
                ) : props.rota === "marca" && props.dadosMarcas ? (
                  props.dadosMarcas.map((infoMarca, index) => {
                    return (
                      <TrBody
                        key={index}
                        onClick={() => {
                          setDadoMarcaSelecionada(infoMarca);
                        }}
                        style={{
                          backgroundColor:
                            dadoMarcaSelecionada.idMarca === infoMarca.idMarca
                              ? "#514869"
                              : "#2F2841",
                        }}
                      >
                        <Td>{infoMarca.nomeMarca}</Td>
                      </TrBody>
                    );
                  })
                ) : props.rota === "modelo" && props.dadosModelos ? (
                  props.dadosModelos.map((infoModelo, index) => {
                    return (
                      <TrBody
                        key={infoModelo.idModelo}
                        onClick={() => {
                          setDadosModeloSelecionado(infoModelo);
                        }}
                        style={{
                          backgroundColor:
                            dadosModeloSelecionado.idModelo ===
                            infoModelo.idModelo
                              ? "#514869"
                              : "#2f2841",
                        }}
                      >
                        <Td>{infoModelo.Marca.nomeMarca}</Td>
                        <Td>{infoModelo.nomeModelo}</Td>
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
        {modalOpenUser && props.rota === "usuarios" ? (
          <ModalUsuario
            setModalOpenUser={setModalOpenUser}
            titulo="Cadastro de Usuário"
            descricaoBotao="Adicionar"
            modo="criacao"
            atualizaUsuarios={props.atualizaUsuarios}
          />
        ) : (
          <></>
        )}

        {modalEditUser && props.rota === "usuarios" ? (
          <ModalUsuario
            setModalEditUser={setModalEditUser}
            titulo="Edição de Usuários"
            descricaoBotao="Alterar"
            dadosUsuarios={dadosUsuarioSelecionado}
            modo="edicao"
            atualizaUsuarios={props.atualizaUsuarios}
          />
        ) : (
          <></>
        )}

        {modalOpenClient && props.rota === "clientes" ? (
          <ModalClientes
            setModalOpenClient={setModalOpenClient}
            titulo="Cadastro de clientes"
            botaoSubmit="Adicionar"
            dadosClientes={dataCustomerSelect}
            modo="criacao"
            atualizaClientes={props.atualizaClientes}
          />
        ) : modalEditClient && props.rota === "clientes" ? (
          <ModalClientes
            setModalEditClient={setModalEditClient}
            titulo="Edição de Clientes"
            botaoSubmit="Alterar"
            dadosClientes={dataCustomerSelect}
            modo="edicao"
            atualizaClientes={props.atualizaClientes}
          />
        ) : (
          <></>
        )}

        {modalOpenMarcas && props.rota === "marca" ? (
          <ModalMarca
            setModalOpenMarcas={setModalOpenMarcas}
            titulo="Criação de Marcas"
            botaoSubmit="Cadastrar"
            modo="criacao"
            atualizaMarcas={props.atualizaMarcas}
          />
        ) : modalEditMarcas && props.rota === "marca" ? (
          <ModalMarca
            setModalEditMarcas={setModalEditMarcas}
            titulo="Edição de Marcas"
            botaoSubmit="Alterar"
            modo="edicao"
            dadoMarcaSelecionada={dadoMarcaSelecionada}
            atualizaMarcas={props.atualizaMarcas}
          />
        ) : (
          <></>
        )}
      </DivMain>
    </>
  );
}

export default Listagem;
