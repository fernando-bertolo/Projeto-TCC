import Login from "../Components/Login/index.jsx";
import Dashboard from "../Components/Dashboard/index.jsx";
import {Route, Routes} from "react-router-dom";

function Rotas(){
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default Rotas;