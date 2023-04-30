import React from 'react'
import './lista.css' 
const Carros = ({marca,km,maxVel,key}) => {
  return (
    <div >
        <div className="align">
            <ul className='lista'>
                <li className='lista-item'>Carro: {marca}</li>
                <li className='lista-item'>MaxVel: {maxVel}</li>
                <li className='lista-item'>KM: {km}</li>
                </ul>
        </div>
    </div>
  )
}

export default Carros