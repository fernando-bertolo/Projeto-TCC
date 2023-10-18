import Login from "../Components/Login/index.jsx";
import Dashboard from "../Components/Dashboard/index.jsx";
import {Route, Routes} from "react-router-dom";
import ValidaAutenticacao from "../Services/validaAutenticacao.jsx";

function Rotas(){
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/dashboard" 
            element={
                <ValidaAutenticacao>
                    <Dashboard/>
                </ValidaAutenticacao>
            }
            
            />
        </Routes>
    )
}

export default Rotas;