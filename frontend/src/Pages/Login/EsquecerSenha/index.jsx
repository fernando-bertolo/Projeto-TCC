import {
    DivTelaMain, 
    SectionLogin,
    DivTitulo,
    Titulo,
} from "../styles";

import {
    TextoEmail,
    DivTextoEmail
} from "./style.jsx"


function EsquecerSenha(){
    return(
        <>
            <DivTelaMain>
                <SectionLogin>
                    <DivTitulo>
                        <Titulo>Recuperar Senha</Titulo>
                    </DivTitulo>
                    <DivTextoEmail>
                        <TextoEmail>Esqueceu sua senha? Digite seu e-mail que enviaremos um link para definir uma nova senha.</TextoEmail>
                    </DivTextoEmail>
                </SectionLogin>
            </DivTelaMain>
        </>
    );
}

export default EsquecerSenha;