import { Body } from "../../Components/BodyPages/style";
import Menu from "../../Components/Menu";
import ModalUser from "../../Components/Modals/Usuarios/modalUsuario.jsx"
import {useState, useEffect} from "react";
import axios from "axios";

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
    TerceiraDivTitulo
} from "./style.jsx";

function Usuarios(){

    const [data, setData] = useState([]);
    const [selecionado, setSelecionado] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3010/usuarios")
        .then(response => {
            setData(response.data);
        })
    })


    const [modalOpen, setModalOpen] = useState(false);
    const [modalEdicaoOpen, setModalEdicaoOpen] = useState(false);




    return(
        <>
            <Body>
                <Menu/>
                <DivMain>
                    <SectionUsuariosExternos>
                        <SectionUsuarios>
                            <SectionTitulo>
                                <DivTitulo>
                                    <PrimeiraDivTitulo></PrimeiraDivTitulo>
                                    <SegundaDivTitulo>
                                        <Titulo>Listagem de Usuários</Titulo>
                                    </SegundaDivTitulo>
                                    
                                    <TerceiraDivTitulo>
                                        <DivIcones>
                                            <IconeAdicionar onClick={() => {setModalOpen(true)}}/>
                                            <IconeEditar onClick={() => {setModalEdicaoOpen(true)}}/>
                                            <IconeExcluir/>
                                        </DivIcones>
                                    </TerceiraDivTitulo>

                                </DivTitulo>
                            </SectionTitulo>

                            <Tabela>
                                <THead>
                                    <Tr>
                                        <Th>ID</Th>
                                        <Th>Nome</Th>
                                        <Th>Usuário</Th>
                                        <Th>E-mail</Th>
                                        <Th>Permissão</Th>
                                    </Tr>
                                </THead>
                                {data.map((user, index) => (
                                    <TBody>
                                        <TrBody 
                                            key={index}
                                            onClick={() => setSelecionado(index)}
                                            style={{backgroundColor: selecionado === index ? '#514869' : '#2F2841'}}
                                            
                                        >
                                            <Td>{user.id}</Td>
                                            <Td>{user.nome}</Td>
                                            <Td>{user.usuario}</Td>
                                            <Td>{user.email}</Td>
                                            <Td>{user.permissao}</Td>
                                        </TrBody>
                                    </TBody>
                                ))}
                            </Tabela>
                        </SectionUsuarios>
                    </SectionUsuariosExternos>
                    <ModalUser 
                    isOpen={modalOpen} 
                    setModalOpen={setModalOpen} 
                    titulo="Cadastro de Usuário"
                    descricaoBotao="ADICIONAR"
                    modo="criar"
                    />

                    <ModalUser
                    isOpen={modalEdicaoOpen}
                    setModalOpen={setModalEdicaoOpen}
                    titulo="Edição de Usuários"
                    descricaoBotao="ALTERAR"
                    dadosUsuarios={data}
                    modo="editar"
                    />
                </DivMain>
            </Body>
            
        </>
    );
}

export default Usuarios;