import React from "react";
import { Navigate } from "react-router-dom";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ValidaAutenticacao({children}){

    if(localStorage.getItem("@montanaToken")){ // Se existir um token no local storage do navegador renderiza o children, no caso a Home
        return children
    } else{
        const teste = toast.warn("É necessário realizar o login", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        console.log(teste)  
        return <Navigate to={"/"}/> // Se não volta para a tela de login
    }
}

export default ValidaAutenticacao;