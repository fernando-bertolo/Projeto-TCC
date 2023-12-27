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



    return(
        <>
            <Body modalOpen={modalOpen}>
                <Menu/>
                <DivMain>
                    <SectionUsuariosExternos modalOpen={modalOpen}>
                        <SectionUsuarios modalOpen={modalOpen}>
                            <SectionTitulo>
                                <DivTitulo>
                                    <PrimeiraDivTitulo></PrimeiraDivTitulo>
                                    <SegundaDivTitulo>
                                        <Titulo>Listagem de Usuários</Titulo>
                                    </SegundaDivTitulo>
                                    
                                    <TerceiraDivTitulo>
                                        <DivIcones>
                                            <IconeAdicionar onClick={() => {setModalOpen(true)}}/>
                                            <IconeEditar/>
                                            <IconeExcluir/>
                                        </DivIcones>
                                    </TerceiraDivTitulo>

                                </DivTitulo>
                            </SectionTitulo>

                            <Tabela modalOpen={modalOpen}>
                                <THead modalOpen={modalOpen}>
                                    <Tr>
                                        <Th>ID</Th>
                                        <Th>Nome</Th>
                                        <Th>Usuário</Th>
                                        <Th>E-mail</Th>
                                        <Th>Permissão</Th>
                                    </Tr>
                                </THead>
                                {data.map((user, index) => (
                                    <TBody modalOpen={modalOpen}>
                                        <TrBody 
                                            key={index}
                                            onClick={() => setSelecionado(index)}
                                            style={{backgroundColor: selecionado === index ? '#514869' : '#2F2841'}}
                                            modalOpen={modalOpen}
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
                    <ModalUser isOpen={modalOpen}/>
                </DivMain>
            </Body>
            
        </>
    );
}

export default Usuarios;