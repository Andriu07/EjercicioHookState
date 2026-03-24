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


  const limpiar = () => {
  setResultado(0);
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

  // eliminar tarea
const eliminarTarea = (index) => {
  setTareas(tareas.filter((_, i) => i !== index));
};

// finalizar tarea
const finalizarTarea = (index) => {
  const nuevas = tareas.map((t, i) =>
    i === index ? { ...t, finalizada: true } : t
  );
  setTareas(nuevas);
};


 //registro de estudiantes
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [carnet, setCarnet] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = () => {
    if (nombre.trim() === "" || edad.trim() === "" || carnet.trim() === "") {
      alert("Complete todos los campos");
      return;
    }

    const nuevo = { nombre, edad, carnet };
    setEstudiantes([...estudiantes, nuevo]);

    // limpiar inputs
    setNombre("");
    setEdad("");
    setCarnet("");
  };





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
            <Boton onClick={limpiar} texto="Limpiar" />










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
      
      <ul>
  {tareas.map((t, index) => (
    <li key={index} style={{ textDecoration: t.finalizada ? "line-through" : "none" }}>
      {t.texto}
      <Boton label="Finalizar" onClick={() => finalizarTarea(index)} />
      <Boton label="Eliminar" onClick={() => eliminarTarea(index)} />
    </li>
  ))}
  </ul>           
    </>
  )



  return (
    <div style={{ padding: "20px" }}>
      <h2>Registro de Estudiantes</h2>

      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div>
        <label>Edad: </label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div>
        <label>Carnet: </label>
        <input
          type="text"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
      </div>

      <button onClick={agregarEstudiante}>Agregar</button>

      <hr />
      <h2>Listado:</h2>
      <ul>
        {estudiantes.map((est, index) => (
          <li key={index}>
            Nombre: {est.nombre} | Edad: {est.edad} | Carnet: {est.carnet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
