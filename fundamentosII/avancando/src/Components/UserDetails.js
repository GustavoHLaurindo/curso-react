import React from 'react'

const UserDetails = ({nome, idade, profissao,maiorIdade}) => {
  return (
    <div>
        <h1>Indentidades</h1>
        <h3>Sou o {nome}</h3>
        <h3>tenho {idade} anos de idade</h3>
        <h3>Trabalho: {profissao}</h3>
        {maiorIdade ? (<p className='pode'>Você pode tirar carteira :)</p>): (<p className='não_pode'>Você precisa ter 18 anos</p>)}
    </div>
  )
}

export default UserDetails