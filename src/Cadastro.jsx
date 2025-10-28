import React from "react";
import "./App.css";
import { Link } from "react-router";

function Cadastro() {
  return (
    <>
    <div>
      <h1>Página 1</h1>
             <p>
               <Link to="/cadastro">Ir para o Cadastro</Link>
             </p>
     </div>
    </>
  );
}

export default Cadastro;


