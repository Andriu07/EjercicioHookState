import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import InputText from './components/InputText'
import Boton from './components/Boton'
import { use } from 'react'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

 
  const multiplicar = ()=>{
    let multiplicacion = num1 * num2;
    setResultado(multiplicacion)
  }


  const dividir = ()=>{
    let division = num1 / num2;
    setResultado(division)
  }

  const restar=()=>{
    let restar = num1 - num2;
    setResultado(restar);
  }

  const sumar =()=>{
    if(num1 < 0 || num2 < 0){
      alert("Ingrese solo numeros positivos")
        setNum1(0);
        setNum2(0);
        return;
    }
    let sumatoria = num1 + num2;
    setResultado(sumatoria);
  }




  //codigo pra el administrador de tareas
  const[tarea, setTarea]= useState("");
  const[tareas, setTareas]= useState([]);

  //crear funcion que guarde las tareas
  const agregarTarea=()=>{
    if(tarea.trim !== ""){
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  }




  return (
    <>
     <h2>Ejemplo de uso de HOOK STATE</h2>
      <InputText
      label="Ingrese el primer numero"
      placeholder="Ingrese el primer numero"
      value={num1} 
      onChange={(e)=> setNum1(Number(e.target.value))}
      type="number"
      />
     
      <InputText
      label="Ingrese el segundo numero "
      placeholder="Ingrese el segundo numero"
      value={num2}
      onChange={(e)=> setNum2(Number(e.target.value))}
      type="number"
      />
      <hr />
      <Boton label="Sumar" onClick={sumar}/>
      <hr/>
      <Boton label="Restar" onClick={restar}/>
      <hr />
      <Boton label="Multiplicación" onClick={multiplicar}/>
      <hr />
      <Boton label="Division" onClick={dividir}/>
      <hr />
            <h2>Resultado: {resultado}</h2>


      <h2>TODO:Administrador de tareas</h2>
      <InputText
        label="Ingrese tarea"
        placeholder="Ingrese tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        type="text"
      />
      <hr />
      <Boton label="Agregar tarea" onClick={agregarTarea}/>
      <hr />
      <h2>Lista de tareas:</h2>
      <ul>
      {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
      
            
    </>
  )
}

export default App
