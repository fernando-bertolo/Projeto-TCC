import {
    SectionMainContent,
    MainContentbackground,
    FormCadastro,
    DivTitulo,
    Titulo,
    DivInputs,
    NomeInput,
    DivNomeInput,
    Input,
    Select,
    Option,
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

                            <DivInputs>
                                <DivNomeInput>
                                    <NomeInput>Nome</NomeInput>
                                </DivNomeInput>
                                <Input type="text" name="nome" id="nome" placeholder="Digite o nome"/>
                            </DivInputs>

                            <DivInputs>
                                <DivNomeInput>
                                    <NomeInput>E-mail</NomeInput>
                                </DivNomeInput>
                                <Input type="email" name="email" id="email" placeholder="Digite o e-mail"/>
                            </DivInputs>

                            <DivInputs>
                                <DivNomeInput>
                                    <NomeInput>Usuário</NomeInput>
                                </DivNomeInput>
                                <Input type="text" name="usuario" id="usuario" placeholder="Digite o usuário"/>
                            </DivInputs>

                            <DivInputs>
                                <DivNomeInput>
                                    <NomeInput>Senha</NomeInput>
                                </DivNomeInput>
                                <Input type="password" name="senha" id="senha" placeholder="Digite a senha"/>
                            </DivInputs>

                            <DivInputs>
                                <DivNomeInput>
                                    <NomeInput>Confirme sua Senha</NomeInput>
                                </DivNomeInput>
                                <Input type="password" name="confirmaSenha" id="confirmaSenha" placeholder="Digite a senha"/>
                            </DivInputs>
                            
                            <DivInputs>
                                <DivNomeInput>
                                    <NomeInput>Informe a permissão</NomeInput>
                                </DivNomeInput>
                                <Select>
                                    <Option value="Administrador">Administrador</Option>
                                    <Option value="Funcionario">Funcionario</Option>
                                </Select>
                            </DivInputs>
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