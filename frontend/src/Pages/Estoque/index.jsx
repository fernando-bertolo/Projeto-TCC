import Menu from "../../Components/Menu/index.jsx";
import Listagem from "../../Components/Listagem/index.jsx";
import {Body, DivContentCadastros} from "../../Components/BodyPages/style.jsx";


function Estoque(){
    return(
        <>
            <Body>
                <Menu/>
                <DivContentCadastros>
                    <Listagem/>
                </DivContentCadastros>
            </Body>
        </>
    );
}

export default Estoque;