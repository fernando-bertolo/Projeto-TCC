import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

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
  BotaoAdicionar,
} from "./style";

function ModalUser(props) {
  const [inputNome, setInputNome] = useState(
    props.modo === "edicao" ? props.dadosUsuarios.nome : ""
  );
  const [inputEmail, setInputEmail] = useState(
    props.modo === "edicao" ? props.dadosUsuarios.email : ""
  );
  const [inputUsuario, setInputUsuario] = useState(
    props.modo === "edicao" ? props.dadosUsuarios.usuario : ""
  );
  const [inputSenha, setInputSenha] = useState();
  const [inputConfirmaSenha, setInputConfirmaSenha] = useState();

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const criacaoUsuario = async (event) => {
    try {
      event.preventDefault();

      if (inputNome === "" || inputNome === Number) {
        toast.warn("O campo de nome deve ser preenchido corretamente", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!validator.isEmail(inputEmail)) {
        toast.warn("E-mail inválido", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (inputSenha === "" && inputConfirmaSenha === "") {
        toast.warn("O campo de senha deve ser preenchido", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (inputSenha !== inputConfirmaSenha) {
        toast.warn("Senhas diferentes", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (inputSenha.length < 5 && inputConfirmaSenha.length < 5) {
        toast.warn("A senha deverá ter no mínimo 5 caracteres", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        if (props.modo === "edicao") {
          await axios.put(
            "http://localhost:3010/alterar-usuario/" + props.dadosUsuarios.id,
            {
              nome: inputNome,
              email: inputEmail,
              usuario: inputUsuario,
              senha: inputSenha,
              confirmaSenha: inputConfirmaSenha,
            }
          );

          // Mensagem de sucesso
          toast.success("Usuario alterado com sucesso", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          await delay(4); // aguarda 4 segundos
        } else {
          // Enviando os dados para a rota /criacao-usuario
          await axios.post("http://localhost:3010/criacao-usuario", {
            nome: inputNome,
            email: inputEmail,
            usuario: inputUsuario,
            senha: inputSenha,
            confirmaSenha: inputConfirmaSenha,
          });

          // Mensagem de sucesso
          toast.success("Usuario criado com sucesso", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          await delay(4); // aguarda 4 segundos
        }

        props.setModalOpenUser(false); // fecha o modal
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warn(error.response.data.Error, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <MainContentbackground>
        <SectionMainContent>
          <FormCadastro>
            <DivTitulo>
              <Titulo>{props.titulo}</Titulo>
            </DivTitulo>

            <DivInputs>
              <DivNomeInput>
                <NomeInput>Nome</NomeInput>
              </DivNomeInput>
              <Input
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite o nome"
                required
                value={inputNome}
                onChange={(event) => {
                  setInputNome(event.target.value);
                }}
              />
            </DivInputs>

            <DivInputs>
              <DivNomeInput>
                <NomeInput>E-mail</NomeInput>
              </DivNomeInput>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Digite o e-mail"
                required
                value={inputEmail}
                onChange={(event) => {
                  setInputEmail(event.target.value);
                }}
              />
            </DivInputs>

            <DivInputs>
              <DivNomeInput>
                <NomeInput>Usuário</NomeInput>
              </DivNomeInput>
              <Input
                type="text"
                name="usuario"
                id="usuario"
                placeholder="Digite o usuário"
                required
                value={inputUsuario}
                onChange={(event) => {
                  setInputUsuario(event.target.value);
                }}
              />
            </DivInputs>

            <DivInputs>
              <DivNomeInput>
                <NomeInput>Senha</NomeInput>
              </DivNomeInput>
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite a senha"
                required
                onChange={(event) => {
                  setInputSenha(event.target.value);
                }}
              />
            </DivInputs>

            <DivInputs>
              <DivNomeInput>
                <NomeInput>Confirme sua Senha</NomeInput>
              </DivNomeInput>
              <Input
                type="password"
                name="confirmaSenha"
                id="confirmaSenha"
                required
                placeholder="Digite a senha"
                onChange={(event) => {
                  setInputConfirmaSenha(event.target.value);
                }}
              />
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
            <BotaoCancelar
              onClick={() => {
                props.modo === "criacao" ? (
                  props.setModalOpenUser(false)
                ) : props.modo === "edicao" ? (
                  props.setModalEditUser(false)
                ) : (
                  <></>
                );
              }}
            >
              CANCELAR
            </BotaoCancelar>
            <BotaoAdicionar
              type="submit"
              onClick={(event) => criacaoUsuario(event)}
            >
              {props.descricaoBotao}
            </BotaoAdicionar>
          </DivBotoes>
        </SectionMainContent>
        <ToastContainer />
      </MainContentbackground>
    </>
  );
}

export default ModalUser;
