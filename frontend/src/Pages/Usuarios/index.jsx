import { Body } from "../../Components/BodyPages/style";
import Menu from "../../Components/Menu";

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

                                <TBody>
                                    <TrBody>
                                        <Td>105e3d78-dea3-4627-9667-52bfc73eee0d</Td>
                                        <Td>Fernando Bertolo</Td>
                                        <Td>fernando.bertolo</Td>
                                        <Td>fernando.bertolo@gmail.com</Td>
                                        <Td>Administrador</Td>
                                    </TrBody>
                                </TBody>
                            </Tabela>
                        </SectionUsuarios>
                    </SectionUsuariosExternos>
                </DivMain>
            </Body>
        </>
    );
}

export default Usuarios;