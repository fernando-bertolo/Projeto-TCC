import React from "react";
import { Navigate } from "react-router-dom";

function ValidaAutenticacao({children}){

    if(localStorage.getItem("@montanaToken")){ // Se existir um token no local storage do navegador renderiza o children, no caso a dashboard
        return children
    } else{
        alert("É necessário realizar o login");
        return <Navigate to={"/"}/> // Se não volta para a tela de login
    }
}

export default ValidaAutenticacao;