import React, { useState } from 'react'

const Condicional = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Gustavo")
  return (
    <div>
        <h1>Apareceu ?</h1>
        {x && <p>sim Apareceu</p>}
        {name == "Gustavo" ? (<p>é Gustavo</p>): (<p>não é, agora é {name}</p>)}
        <button onClick={() => setName("mathues")}>Mudar Nome!</button>
    </div>
  )
}

export default Condicional;