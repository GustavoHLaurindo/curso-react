import { useState } from 'react';
import './App.css';
import './index.css'
import CarDetalhes from './Components/CarDetalhes.js'
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message.js'
import ChangeMessageState from './Components/ChangeMessageState';
import UserDetails from './Components/UserDetails';
import UseState from './Components/UseState';
function App() {
  const persons = [
    {nome: "Gustavo", idade: 16, profissao: "Programador", maiorIdade: false},
    {nome: "João", idade: 18, profissao: "Programador", maiorIdade: true},
    {nome: "Carlos", idade: 17, profissao: "Pedreiro", maiorIdade: false},
    {nome: "Miguel", idade: 39, profissao: "Leitor", maiorIdade: true}
]

  return (
    <div className="App">
      {persons.map((per) => (
     <UserDetails nome={per.nome} idade={per.idade} profissao={per.profissao} maiorIdade={per.maiorIdade}/>
    ))}
    <UseState/>

    </div>
  );
}

export default App;
