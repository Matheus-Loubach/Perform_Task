import Header from './Components/Header';
import { useState } from 'react'
import ListarTarefas from './Components/ListarTarefas';
import { useEffect } from 'react';

function App() {

  //LocalStorage
  const data = localStorage.getItem("Tarefas");
  const [arrayTarefas, setArrayTarefas] = useState(data ? JSON.parse(data) : []);

  //contar quantidades de tarefas criadas
  const [qtdTarefas, setQtdTarefas] = useState(0);


  //Atualizando Tarefas Criadas
  useEffect(() => {
      var valor = arrayTarefas.length;
      setQtdTarefas(valor);
  }, [arrayTarefas, setQtdTarefas])

  const handleAdd = (Tarefas) =>{
    const newArrayTarefas = [...arrayTarefas, Tarefas];

    setArrayTarefas(newArrayTarefas);
    localStorage.setItem("Tarefas", JSON.stringify(newArrayTarefas));
  };

  return (
    <div className="App">
     <Header handleAdd={handleAdd}/>
     <ListarTarefas array={arrayTarefas} setArray={setArrayTarefas} qtdTarefas={qtdTarefas}/>
    </div>
  );
}

export default App;
