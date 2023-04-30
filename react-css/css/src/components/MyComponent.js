import React from 'react'
import './MyComponent.css'
const MyComponent = () => {
  return (
    <div>
        <h1>CSS componente</h1>
        <p className='componente'>Este é o parágrafo do componente</p>
        <p style={{color:"white", backgroundColor:"green", fontWeight:"600"}}>Este é o Css inline</p>
        
    </div>
  )
}

export default MyComponent;