import React from 'react'
import { useState } from 'react'
import '../CSS/Header.css'

const Header = ({handleAdd}) => {



  const generateID = () => {
    var min = Math.ceil(1);
    var max = Math.floor(99);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const [ValorUser, setValorUser] = useState("");
  const [DesTask, setDesTask] = useState("");
  const handleSave = () =>{

    const DetalhesTarefas ={
      id: generateID(),
      ValorUser: ValorUser,
      DesTask: DesTask,
      //DesTask: DesTask,
  };

  handleAdd(DetalhesTarefas);
  setValorUser("");
  setDesTask("");
  };

  return (

    <div>
      <header className='container_header'>
        <h1>Perform <span>Task</span></h1>
        <section>
          <form onSubmit={handleSave}>
            <label>
                <input type="text" placeholder='Titulo da Tarefa' onChange={(e) => setDesTask(e.target.value)}/>
             </label>
              <label>
                <input type="text" placeholder='Descrição*' onChange={(e) => setValorUser(e.target.value)} required/>
             </label>
             <button>Criar</button>
           </form>
        </section>   
        </header>    
    </div>
  )
}

export default Header