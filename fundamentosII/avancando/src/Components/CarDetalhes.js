import React from 'react'

const CarDetalhes = ({marca, km, cor, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>km: {km}</li>
            <li>Cor: {cor}</li>
            {newCar != true ? (<p>carro velho!</p>): (<p>Carro Novo!</p>)}
        </ul>
    </div>
  )
}

export default CarDetalhes