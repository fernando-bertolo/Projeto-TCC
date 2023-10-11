import Login from "../Components/Login/index.jsx";
import {Route, Routes} from "react-router-dom";

function Rotas(){
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
        </Routes>
    )
}

export default Rotas;