import {
    SectionMainContent,
    MainContentbackground,
    FormCadastro,
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
                        <FormCadastro></FormCadastro>
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