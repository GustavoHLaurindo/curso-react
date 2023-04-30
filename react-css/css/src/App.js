import React from'./logo.svg'
import './App.css';
import Title from './components/Title'
import MyComponent from './components/MyComponent';
import { useState } from 'react';
function App() {
  const n = 10
  const [name,setname] = useState("Gustavo")
  const redtitle = true
  return (
    <div className="App">
      <img src={React} width={300} alt="" />
     <h1>React com css</h1>
     <MyComponent/>
     <p>este parágrafo é do App</p>
     <h2 style={n == 10 ? ({color:'green'}) : ({color:"purple"})}>Css Dinâmico</h2>
     <h2 style={name === "Gustavo" ? ({color:'orange'}) : ({color:"purple"})}>Css Dinâmico</h2>
     {/*classe dinamic*/}
     <h2 className={redtitle ? "title" : "title-red"}>Este tem titulo classe dinâmica</h2>
     <Title/>
    </div>
    
  );
}

export default App;
