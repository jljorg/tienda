import React from 'react'
import Producto from './Producto'

const ListaDatos = ({productos}) => {
  //console.log("array datos")
 // console.log(productos)
  

  return (
    <div><h1 className='text-center font-black text-2xl text-blue-600 mt-3'>ListaDatos</h1>
    <>
      <h1 className="font-black text-4xl text-gray-100">Incio</h1>
      <p className='mt-3'>Lista Clientes</p>
       
       <table className="w-full mt-5 table-auto shadow bg-white">
         <thead className="bg-blue-800 text-white">
           <th className="p-2">Nombre</th>
           <th className="p-2">Estado</th>
           <th className="p-2">Categoria</th>
           <th className="p-2">Acciones</th>
         </thead>
         <tbody>
         {
           
        productos.map((producto)=>(
          
         <Producto 
         key={producto.id}
         producto={producto} 
         
         ></Producto>
        ))
        
      }

         </tbody>
       </table>
    </>
    </div>

  )
}

export default ListaDatos