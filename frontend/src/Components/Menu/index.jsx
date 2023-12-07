import { 
    NavMenu,
    DivLogo,
    Logo,
    SectionGeral,
    DivTextoGeral,
    TituloDivisao,
    DivOpcaoGeral,
    LinkNavegacao,
    SectionControle,
    DivTextoControle,
    DivOpcaoControle,
    DivUsuario,
    DivConteudoUsuario,
    TextoUsuario,
    Sair
} from "./style.jsx";

import LogoImagem from "./Imagens/Logo.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";


function Menu(){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3010/usuarios")
        .then(response => {
            setData(response.data);
        })
    })


    return(
        <>
        <NavMenu>
            <DivLogo>
                <Logo src={LogoImagem}/>
            </DivLogo>
            <SectionGeral>  
                <DivTextoGeral>
                    <TituloDivisao>Geral</TituloDivisao>
                </DivTextoGeral>
                <LinkNavegacao to={"/home"}>
                    <DivOpcaoGeral>
                        Home
                    </DivOpcaoGeral>
                </LinkNavegacao>
        
                <LinkNavegacao to={"/estoque"}>
                    <DivOpcaoGeral>
                        Estoque
                    </DivOpcaoGeral>
                </LinkNavegacao>
            </SectionGeral>

            <SectionControle>
                <DivTextoControle>
                    <TituloDivisao>Controle</TituloDivisao>
                </DivTextoControle>

                <LinkNavegacao to={"/clientes"}>
                    <DivOpcaoControle>
                        Clientes
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"/cadastros"}>
                    <DivOpcaoControle>
                        Cadastros
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"/relatorios"}>
                    <DivOpcaoControle>
                        Relatórios
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"/usuarios"}>
                    <DivOpcaoControle>
                        Usuários
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"/historico"}>
                    <DivOpcaoControle>
                        Histórico
                    </DivOpcaoControle>
                </LinkNavegacao>
            </SectionControle>

            <DivUsuario>
                <DivConteudoUsuario>
                    {data.map(user => (
                        <TextoUsuario>{user.nome}</TextoUsuario>
                    ))}
                    
                </DivConteudoUsuario>
                <DivConteudoUsuario>
                    <TextoUsuario>
                        Admin
                    </TextoUsuario>
                </DivConteudoUsuario>
                <DivConteudoUsuario>
                    <Sair to={"/"}>Sair</Sair>
                </DivConteudoUsuario>
            </DivUsuario>
        </NavMenu>
        </>
    );
}

export default Menu;