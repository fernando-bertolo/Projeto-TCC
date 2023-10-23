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
    DivOpcaoControle
} from "./style.jsx";

import LogoImagem from "./Imagens/Logo.jpeg";

function Menu(){
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

        </NavMenu>
        </>
    );
}

export default Menu;