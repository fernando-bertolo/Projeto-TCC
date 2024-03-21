import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";

function ValidaAutenticacao({children}){
        if(localStorage.getItem("@TokenUsuario")){ // Se existir um token no local storage do navegador renderiza o children, no caso a Home
            return children;
        } else {
            toast.warn("É necessário realizar o login", {
                toastId: "loginWarning", // ESte toastId faz com que não ocorra duplicidade na mensagem de aviso quando o container é chamado mais de uma vez
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return <Navigate to={"/"}/>
        }
}

export default ValidaAutenticacao;