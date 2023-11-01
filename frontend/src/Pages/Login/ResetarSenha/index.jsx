import {
    DivTelaMain,
    DivTitulo,
    Titulo,
    DivIcones,
    Botao
} from "../styles";
import {SectionAutenticacao} from "../../../Components/BodyPages/style.jsx";

import {
    SectionInput,
    Input,
    DivInput,
    IconeCadeado,
    DivBotao
} from "./styles.jsx";

import axios from "axios";





function ResetarSenha(){

    const Resetar = async (event) => {
        try {
            event.preventDefault()
            await axios.post("http://localhost:3010/resetar-senha", {

            })
            
        } catch (error) {
            
        }
    }
    return(
        <DivTelaMain>
            <SectionAutenticacao>
                <DivTitulo>
                    <Titulo>Esqueceu sua Senha?</Titulo>
                </DivTitulo>

                <SectionInput>
                    <DivInput>
                        <DivIcones>
                            <IconeCadeado/>
                        </DivIcones>
                        <Input type="password" name="senha" id="senha" placeholder="Digite a nova senha"/>
                    </DivInput>

                    <DivInput>
                        <DivIcones>
                            <IconeCadeado/>
                        </DivIcones>
                        <Input type="password" name="confirmaSenha" id="confirmaSenha" placeholder="Confirme a nova senha"/>
                    </DivInput>
                </SectionInput>

                <DivBotao>
                    <Botao type="submit" onClick={(event) => Resetar(event)}>Confirmar</Botao>
                </DivBotao>
                
            </SectionAutenticacao>
        </DivTelaMain>
    );
}

export default ResetarSenha;