import React, { useState } from 'react'

const UseState = () => {
  const [number,setNumber] = useState(22);
  function clicou(){
     setNumber(number + 1)
     
  }
  const clicoum = () =>{
    setNumber(number - 1)
  }
  return (
    <div>
      <p>Valor : {number}</p>
      <button onClick={clicou}>Mais</button>
      <button onClick={clicoum}>Menos</button>
    </div>
  )
}

export default UseState