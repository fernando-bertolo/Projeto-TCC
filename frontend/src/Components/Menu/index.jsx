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
import { useState} from "react";
import axios from "axios";


function Menu(){

    const [data, setData] = useState();

        axios.get("http://localhost:3010/usuario-logado")
        .then(response => {
            headers: {
                Authorization: localStorage.getItem("@TokenUsuario")
            }
            if(localStorage.getItem("@TokenUsuario")){
                setData(response.data.usuario);
            }
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
                        <TextoUsuario>
                            {data}
                        </TextoUsuario>            
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