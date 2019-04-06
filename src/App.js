import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { Photoframe } from "./Containers/Photoframe/Photoframe";

class App extends Component {
  render() {
    return (
      <body className="App-body">
        <h1>
          Interfaces Pessoa Máquina 2018-19
        </h1>
        <h2>
          Grupo 26 - Turno IPM20111326L07
        </h2>
        <div>
         <Photoframe/>
          <h2>
            Análise de Tarefas
          </h2>
          <a
            href={"https://goo.gl/forms/PurlvUrrlACIn6iS2"}
          >
            Questionário  para análise de tarefas
          </a>
          <br/>
          <a
            href={"https://fobi.io/#/f/RAS2vEj"}
          >
            Questionário para análise de tarefas (melhorado)
          </a>
          <br/>
          <a
            href={"https://drive.google.com/open?id=1CqLvqLw80HwUquxRbXl6HZ-21_8voTPV"}
          >
            Análise de tarefas + Funcionalidades
          </a>
          <br/>
          <a
            href={"https://docs.google.com/document/d/1pEJra-myJzXVXxx34VLyKCJobT-LMTb2Jo-tfS2lwDI/edit?usp=sharing"}
          >
            Análise de tarefas + Funcionalidades (melhorados)
          </a>
        </div>
        <div>
          <h2>
            Modelo Conceptual
          </h2>
          <a
            href={""}
          >
            Modelo Conceptual
          </a>
          <br/>
          <a
            href={""}
          >
            Modelo Conceptual (melhorado)
          </a>
        </div>
        <div>
          <h2>
            Protótipos
          </h2>
          <a
            href={""}
          >
            PBF
          </a>
          <br/>
          <a
            href={""}
          >
            PBF (melhorado)
          </a>
          <br/>
          <a
            href={"/igo/"}
          >
            Primeiro protótipo funcional
          </a>
          <br/>
          <a
            href={"/igo/"}
          >
            Primeiro protótipo funcional completo
          </a>
          <br/>
          <a
            href={"/igo/"}
          >
            Segundo protótipo funcional
          </a>
          <br/>
          <a
            href={"/igo/"}
          >
            Segundo protótipo funcional completo
          </a>
          <br/>
          <a
            href={"/igo/"}
          >
            Protótipo Final
          </a>
          <br/>
          <a
            href={"/igo/"}
          >
            Protótipo Final completo
          </a>
        </div>
        <div>
          <h2>
            Avaliação com Utilizadores
          </h2>
          <a
            href={""}
          >
            Tarefas e Critérios de usabilidade
          </a>
          <br/>
          <a
            href={""}
          >
            Tarefas e Critérios de usabilidade (melhorado)
          </a>
          <br/>
          <a
            href={""}
          >
            Relatório de avaliação com utilizadores
          </a>
          <br/>
          <a
            href={""}
          >
            Relatório de avaliação com utilizadores (melhorado)
          </a>
          <br/>
          <a
            href={""}
          >
            Manual do Utilizador
          </a>
        </div>
        <hr/>
        <img
          src={logo}
          className={"App-logo"}
          alt={"logo"}
        />
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    );
  }
}

export default App;
