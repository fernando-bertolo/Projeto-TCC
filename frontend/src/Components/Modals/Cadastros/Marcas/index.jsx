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
} from "./style.jsx";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function ModalMarca(props) {
  // Função de delay
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }
  const CadastraMarca = async (event) => {
    try {
      event.preventDefault();

      if (props.modo === "criacao") {
        await axios.post("http://localhost:3010/criacao-marcas", {
          nomeMarca: inputMarca,
        });

        // Mensagem de sucesso
        toast.success("Marca cadastrada com sucesso!!", {
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
        props.atualizaMarcas();
        props.setModalOpenMarcas(false);
      } else if (props.modo === "edicao") {
        await axios.put(
          `http://localhost:3010/alteracao-marcas/${props.dadoMarcaSelecionada.idMarca}`,
          {
            nomeMarca: inputMarca,
          }
        );
        // Mensagem de sucesso
        toast.success("Marca alterada com sucesso!!", {
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
        props.atualizaMarcas();
        props.setModalEditMarcas(false);
      } else {
        // Mensagem de sucesso
        toast.warn("Não foi possível cadastrar a marca!!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [inputMarca, setInputMarca] = useState(
    props.modo === "edicao" ? props.dadoMarcaSelecionada.nomeMarca : ""
  );
  return (
    <>
      <MainContentbackground>
        <SectionMainContent>
          <DivTitulo>
            <Titulo>{props.titulo}</Titulo>
          </DivTitulo>

          <DivContent>
            <Label>Informe a marca: </Label>
            <Input
              type="text"
              id="nomeMarca"
              name="nomeMarca"
              value={inputMarca}
              onChange={(event) => {
                setInputMarca(event.target.value);
              }}
            />
          </DivContent>
          <DivBotoes>
            <BotaoCancelar
              onClick={() => {
                props.modo === "criacao" ? (
                  props.setModalOpenMarcas(false)
                ) : props.modo === "edicao" ? (
                  props.setModalEditMarcas(false)
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
                CadastraMarca(event);
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

export default ModalMarca;
