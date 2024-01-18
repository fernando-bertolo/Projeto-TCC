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

    useEffect(() => {
        axios.get("http://localhost:3010/usuarios")
        .then(response => {
            setData(response.data);
        })
    })


    const [modalOpen, setModalOpen] = useState(false);
    const [modalEdicaoOpen, setModalEdicaoOpen] = useState(false);
    const [dadosUsuarioSelecionado, setDadosUsuarioSelecionado] = useState("");
    const [selecionado, setSelecionado] = useState(null);


    //Criando a função cliqueUsuario para o onclick lidar com dois argumentos
    const cliqueUsuario = (usuario) => {
        setSelecionado(usuario.id);
        setDadosUsuarioSelecionado(usuario);
    }




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
                                    <TBody>
                                        {data.map((usuario, index) => (
                                            <TrBody 
                                                key={usuario.id}
                                                onClick={() => cliqueUsuario(usuario)}
                                                style={{backgroundColor: selecionado === usuario.id ? '#514869' : '#2F2841'}}
                                                
                                            >
                                                <Td>{usuario.id}</Td>
                                                <Td>{usuario.nome}</Td>
                                                <Td>{usuario.usuario}</Td>
                                                <Td>{usuario.email}</Td>
                                                <Td>{usuario.permissao}</Td>
                                            </TrBody>
                                        ))}
                                    </TBody>
                            </Tabela>
                        </SectionUsuarios>
                    </SectionUsuariosExternos>
                    <ModalUser 
                    isOpen={modalOpen} 
                    setModalOpen={setModalOpen} 
                    titulo="Cadastro de Usuário"
                    descricaoBotao="ADICIONAR"
                    modo="criacao"
                    />

                    <ModalUser
                    isOpen={modalEdicaoOpen}
                    setModalOpen={setModalEdicaoOpen}
                    titulo="Edição de Usuários"
                    descricaoBotao="ALTERAR"
                    dadosUsuarios={dadosUsuarioSelecionado}
                    modo="edicao"
                    />
                </DivMain>
            </Body>
            
        </>
    );
}

export default Usuarios;