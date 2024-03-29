import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Gustavo", "Pedro"])
  return (
    <div>
        <ul>
            {list.map((item, i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender