import { useState } from "react"
const MenageData = () => {
    let someData = 10
    const [number, setNumber] = useState(15);
  return (
    <div>
        <h2>valor: {someData}</h2>
        <button onClick={() =>{someData = 15}}>Mudar valor</button>
        <h2>valor: {number}</h2>
        <button onClick={() =>{setNumber(14)}}>mudar valor 2</button>
    </div>
  )
}

export default MenageData;