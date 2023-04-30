import React from 'react'
const showUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário é: {props.nome} </h2>
    </div>
  )
}

export default showUserName;