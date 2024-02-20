import { Body } from "../BodyPages/style.jsx";
import Menu from "../Menu/index.jsx";
import ModalUser from "../Modals/Usuarios/modalUsuario.jsx";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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

function Listagem({
  title,
  data,
  primeiraColuna,
  segundaColuna,
  terceiraColuna,
  quartaColuna,
  quintaColuna,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEdicaoOpen, setModalEdicaoOpen] = useState(false);
  const [dadosUsuarioSelecionado, setDadosUsuarioSelecionado] = useState("");
  const [mensagemError, setMensagemError] = useState();

  function exclusaoUsuario() {
    try {
      if (dadosUsuarioSelecionado.id) {
        const response = axios.delete(
          "http://localhost:3010/deletar-usuario/" + dadosUsuarioSelecionado.id,
          {
            id: dadosUsuarioSelecionado.id,
          }
        );
        setMensagemError(response);

        toast.success("Usuario excluído com sucesso", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (mensagemError === 400) {
        toast.error("Falha ao excluir usuário", {
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
      return console.log(error);
    }
  }

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
                    <Titulo>{title}</Titulo>
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
                      <IconeExcluir onClick={exclusaoUsuario} />
                    </DivIcones>
                  </TerceiraDivTitulo>
                </DivTitulo>
              </SectionTitulo>

              <Tabela>
                <THead>
                  <Tr>
                    <Th>{primeiraColuna}</Th>
                    <Th>{segundaColuna}</Th>
                    <Th>{terceiraColuna}</Th>
                    <Th>{quartaColuna}</Th>
                    <Th>{quintaColuna}</Th>
                  </Tr>
                </THead>
                <TBody>
                  {data.map((usuario, index) => {
                    return (
                      <TrBody
                        key={index}
                        onClick={() => setDadosUsuarioSelecionado(usuario)}
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
                  })}
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
          <ToastContainer />
        </DivMain>
      </Body>
    </>
  );
}

export default Listagem;
