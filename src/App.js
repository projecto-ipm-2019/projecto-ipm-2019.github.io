import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { Photoframe } from "./Containers/Photoframe/Photoframe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
              href={""}
            >
              Questionário para análise de tarefas (melhorado)
            </a>
            <br/>
            <a
              href={""}
            >
              Análise de tarefas + Funcionalidades
            </a>
            <br/>
            <a
              href={""}
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
              href={""}
            >
              Primeiro protótipo funcional
            </a>
            <br/>
            <a
              href={""}
            >
              Primeiro protótipo funcional completo
            </a>
            <br/>
            <a
              href={""}
            >
              Segundo protótipo funcional
            </a>
            <br/>
            <a
              href={""}
            >
              Segundo protótipo funcional completo
            </a>
            <br/>
            <a
              href={""}
            >
              Protótipo Final
            </a>
            <br/>
            <a
              href={""}
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
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
