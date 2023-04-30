

const Events = () => {
    const MyEvent = () =>{
        console.log("ativouu")
    }
    const Acao = () =>{
       alert("Clicou pai!")
    }
  return (
    <div>
        <div>
            <button onClick={MyEvent}>clique aqui</button>
        </div>
        <div>
            <button onClick={Acao}>clique aqui também!</button>
        </div>
    </div>
  )
}

export default Events;