import React from 'react'
import '../CSS/ListarItens.css'
import trash from '../Assents/trash.png'

const ListarItens = ({item, handleRemove}) => {
  return (
    <div className='container_listarItens'>
    <div>
      <ul>
      <li>{item.DesTask}</li>
      <li>{item.ValorUser}</li>
      </ul>      
    </div>
    <div>
      <img onClick={() => handleRemove(item.id)} src={trash}/>
    </div>
    </div>
  )
}

export default ListarItens