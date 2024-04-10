import {
  MainContentbackground,
  SectionMainContent,
  DivTitulo,
  Titulo,
  DivContent,
  Label,
  Input,
  DivBotoes,
  BotaoAdicionar,
  BotaoCancelar,
} from "./ModalAcessorioStyle";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function ModalAcessorio(props) {
  const [inputAcessorio, setInputAcessorio] = useState("");

  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  const CadastraAcessorio = async (event) => {
    try {
      event.preventDefault();

      await axios.post("http://localhost:3010/criacao-acessorios", {
        nomeAcessorio: inputAcessorio,
      });
      // Mensagem de sucesso
      toast.success("Acessório cadastrado com sucesso!!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      await delay(3.5);
      props.atualizaAcessorio();
      props.setModalOpenAcessorio(false);
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
          <DivTitulo>
            <Titulo>{props.titulo}</Titulo>
          </DivTitulo>

          <DivContent>
            <Label>Informe a Acessório: </Label>
            <Input
              type="text"
              id="nomeMarca"
              name="nomeMarca"
              value={inputAcessorio}
              onChange={(event) => {
                setInputAcessorio(event.target.value);
              }}
            />
          </DivContent>
          <DivBotoes>
            <BotaoCancelar
              onClick={() => {
                props.modo === "criacao" ? (
                  props.setModalOpenAcessorio(false)
                ) : props.modo === "edicao" ? (
                  props.setModalEditAcessorio(false)
                ) : (
                  <></>
                );
              }}
            >
              Cancelar
            </BotaoCancelar>
            <BotaoAdicionar
              type="submit"
              onClick={(event) => {
                CadastraAcessorio(event);
              }}
            >
              {props.botaoSubmit}
            </BotaoAdicionar>
          </DivBotoes>
          <ToastContainer />
        </SectionMainContent>
      </MainContentbackground>
    </>
  );
}

export default ModalAcessorio;
