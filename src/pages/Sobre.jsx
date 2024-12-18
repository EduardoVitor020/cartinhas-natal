import Head from "next/head";
import React from "react";

function Sobre() {
  const containerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "00px",
    height: "100vh", // Faz o contêiner ocupar a altura total da tela,
    padding: "150px",
    backgroundColor: "white",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontFamily: "Pacifico",
    marginBottom: "40px",
    marginLeft: "0px",
    color: "black",
    fontSize: "60px",
    wordWrap: "break-word", // Quebra palavras longas
    overflowWrap: "break-word", // Quebra palavras longas em navegadores mais novos
    wordBreak: "break-word",
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "Pacifico",
    marginBottom: "40px",
    marginLeft: "0px",
    color: "black",
    fontSize: "60px",
    wordWrap: "break-word", // Quebra palavras longas
    overflowWrap: "break-word", // Quebra palavras longas em navegadores mais novos
    wordBreak: "break-word",
    textAlign: "left",
  };

  const textContainerStyle = {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    flexDirection: "column",
    marginLeft: "50px",
    color: "black",
    fontSize: "25px",
    wordWrap: "break-word", // Quebra palavras longas
    overflowWrap: "break-word", // Quebra palavras longas em navegadores mais novos
    wordBreak: "break-word",
    textAlign: "left",
  };

  return (
    <>
      <div id="scrollSobre">
      <div style={containerStyle}>
        <img src={"img/pinheiro.svg"} />
        <div style={textContainerStyle}>
          <h1 style={titleStyle}>Sobre o Projeto</h1>
          <p>
            O Projeto Noel nasceu do desejo de proporcionar um Natal mais feliz
            para crianças em situação de vulnerabilidade. Nossa missão é
            conectar escolas e padrinhos dispostos a realizar os sonhos das
            crianças por meio da doação de presentes.
          </p>
          <br />
          <p>
            Junte-se a nós nesta causa e faça a diferença na vida de uma criança
            neste Natal!{" "}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sobre;
