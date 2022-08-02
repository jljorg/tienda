import React from 'react'
import { useNavigate } from 'react-router-dom'

const Producto = ({producto}) => {
    const navigate=useNavigate();

    const {id,estado,nombre,categoria}=producto

  return (
    <tr className="border hover:bg-gray-200">
      <td className="p-3">{id}</td>
    <td className="p-3">{nombre}</td>
    <td className="p-3">{estado}</td>
    <td className="p-3">{categoria}</td>
    <td className="p-3" ><button className="bg-yellow-500   hover:bg-yellow-600 block
     w-full p-2 text-white uppercase font-bold text-xs rounded-md" >Edit</button>
     
     <button className="bg-red-500   hover:bg-red-800 block
     w-full p-2 text-white uppercase font-bold text-xs mt-3 rounded-md">Eliminar</button>
     <button className="bg-green-500   hover:bg-green-600 block
     w-full p-2 text-white uppercase font-bold text-xs mt-3 rounded-md"
     onClick={()=>navigate(`/api/productos/${id}`)} >ver</button></td>
  </tr>
  )
}

export default Producto

