import React from 'react'
import ListarItens from './ListarItens';
import livros from '../Assents/documento-assinado.png'
import '../CSS/ListarTarefas.css'

const ListarTarefas = ({array, setArray,qtdTarefas}) => {

    //Remover Produto
    const handleRemove = (id) => {
      const arr = array.filter((item) => item.id !== id);
      // console.log(array.id);
      localStorage.setItem("Tarefas", JSON.stringify(arr));
      setArray(arr);
    };

  return (
    <div>
      <div className='container_qtd'> 
      <p>Tarefas: <span>{qtdTarefas}</span></p>
      </div>
      <section>
        {(qtdTarefas === 0) ?  <p style={{marginTop: '10%', fontSize: '1.5em'}}>Você ainda não tem tarefas cadastradas <p>Crie tarefas</p> <img src={livros} alt="" /> </p> : array.map((item, index) => (
          <ListarItens key={index} item={item} handleRemove={handleRemove}/>
        ))}
      </section>
    </div>
  )
}

export default ListarTarefas