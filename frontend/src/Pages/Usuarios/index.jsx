import { Body } from "../../Components/BodyPages/style";
import Menu from "../../Components/Menu";
import {useState, useEffect} from "react";
import axios from "axios";

import {
    DivMain,
    SectionUsuarios,
    DivTitulo,
    Titulo,
    Tabela,
    Tr,
    Td,
    Th,
    THead,
    TBody,
    TrBody,
    SectionUsuariosExternos
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



    return(
        <>
            <Body>
                <Menu/>
                <DivMain>
                    <SectionUsuariosExternos>
                        <SectionUsuarios>
                            <DivTitulo>
                                <Titulo>Listagem de Usuários</Titulo>
                            </DivTitulo>

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
                </DivMain>
            </Body>
        </>
    );
}

export default Usuarios;