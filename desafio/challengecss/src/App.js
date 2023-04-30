import Carros from './components/Carros'
import './global.css'
function App() {
  const cars = [
    {marca:"Ferrari",maxVel:250,km:0,id:1},
    {marca:"Mustang",maxVel:300,km:0,id:2},
    {marca:"Mustang",maxVel:300,km:0,id:2},
    {marca:"Supra",maxVel:350,km:0,id:3}
]
  return (
    <div className="App">
      <h1>Sala de carros</h1>
      <div className="carros">
        {cars.map((cars)=>(
            <Carros marca={cars.marca} maxVel={cars.maxVel} km={cars.km}
            key={cars.id}/>
          ))}
      </div>
    </div>
  );
}

export default App;
