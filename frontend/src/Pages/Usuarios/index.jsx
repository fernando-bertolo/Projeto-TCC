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
    TBody
} from "./style.jsx";

function Usuarios(){
    return(
        <>
            <Body>
                <Menu/>
                <DivMain>
                    <SectionUsuarios>
                        <DivTitulo>
                            <Titulo>Usuários</Titulo>
                        </DivTitulo>

                        <Tabela>
                            <THead>
                                <Tr>
                                    <Th>Nome</Th>
                                    <Th>Usuário</Th>
                                    <Th>Permissão</Th>
                                </Tr>
                            </THead>

                            <TBody>
                                <Tr>
                                    <Td>Fernando Bertolo</Td>
                                    <Td>fernando.bertolo</Td>
                                    <Td>Administrador</Td>
                                </Tr>
                            </TBody>
                        </Tabela>
                    </SectionUsuarios>
                </DivMain>
                
            </Body>
        </>
    );
}

export default Usuarios;