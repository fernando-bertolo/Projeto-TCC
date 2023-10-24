import {
    DivTelaMain, 
    SectionLogin,
    DivTitulo,
    Titulo,
    Input
} from "../styles";

import {
    TextoEmail,
    DivTextoEmail,
    SectionRecuperar,
    DivInput,
    DivIcone,
    IconeMail,
    TextoVoltarLogin,
    DivBotao,
    Botao
} from "./style.jsx"


function EsquecerSenha(){
    return(
        <>
            <DivTelaMain>
                <SectionLogin>
                    <DivTitulo>
                        <Titulo>Recuperar senha</Titulo>
                    </DivTitulo>
                    <DivTextoEmail>
                        <TextoEmail>Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha.</TextoEmail>
                    </DivTextoEmail>

                    <SectionRecuperar>
                        <DivInput>
                            <DivIcone>
                                <IconeMail/>
                            </DivIcone>
                            <Input type="email" name="email" placeholder="E-mail"/>
                        </DivInput>
                        <TextoVoltarLogin to={"/"}>Voltar para o Login</TextoVoltarLogin>
                    </SectionRecuperar>

                    <DivBotao>
                        <Botao>RECUPERAR</Botao>
                    </DivBotao>

                    
                </SectionLogin>
            </DivTelaMain>
        </>
    );
}

export default EsquecerSenha;