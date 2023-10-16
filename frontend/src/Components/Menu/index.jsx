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

import LogoImagem from "../Menu/Imagens/Logo.jpeg";

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
                <LinkNavegacao to={"/dashboard"}>
                    <DivOpcaoGeral>
                        Dashboard
                    </DivOpcaoGeral>
                </LinkNavegacao>
        
                <LinkNavegacao to={"#"}>
                    <DivOpcaoGeral>
                        Estoque
                    </DivOpcaoGeral>
                </LinkNavegacao>
            </SectionGeral>

            <SectionControle>
                <DivTextoControle>
                    <TituloDivisao>Controle</TituloDivisao>
                </DivTextoControle>

                <LinkNavegacao to={"#"}>
                    <DivOpcaoControle>
                        Clientes
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"#"}>
                    <DivOpcaoControle>
                        Cadastros
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"#"}>
                    <DivOpcaoControle>
                        Relatorios
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"#"}>
                    <DivOpcaoControle>
                        Funcionarios
                    </DivOpcaoControle>
                </LinkNavegacao>

                <LinkNavegacao to={"#"}>
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