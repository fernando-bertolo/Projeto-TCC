import {
    SectionMainContent,
    MainContentbackground,
    FormCadastro,
    DivTitulo,
    Titulo,
    Input,
    DivBotoes,
    BotaoCancelar,
    BotaoAdicionar
} from "./style-modalUsuario.jsx"

function ModalUser({isOpen, setModalOpen}) {

    if(isOpen){
        return(
            <>
                <MainContentbackground>
                    <SectionMainContent isOpen={isOpen}>
                        <FormCadastro>
                            <DivTitulo>
                                <Titulo>Cadastre um usuário</Titulo>
                            </DivTitulo>
                            <Input type="text" name="nome" id="nome"/>
                            <Input type="email" name="email" id="email"/>
                            <Input type="text" name="usuario" id="usuario"/>
                            <Input type="password" name="senha" id="senha"/>
                            <Input type="password" name="confirmaSenha" id="confirmaSenha"/>
                        </FormCadastro>
                        <DivBotoes>
                            <BotaoCancelar onClick={() => {setModalOpen(false)}}>CANCELAR</BotaoCancelar>
                            <BotaoAdicionar>ADICIONAR</BotaoAdicionar>
                        </DivBotoes>
                    </SectionMainContent>
                </MainContentbackground>
            </>
        )
    }
};

export default ModalUser;