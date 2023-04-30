import './desafio.css'
const Desafio = () =>{
    const a = 5
    const b = 4
    const somar = () =>{
        var soma = a+b
        console.log(`o resultado de 5 + 4 é ${soma}`)
    }
    return(
        <div>
            <h1>{a}</h1>
            <h1>{b}</h1>
            <button onClick={somar}>Ver resultado</button>
        </div>
    );
}
export default Desafio;