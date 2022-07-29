import React, { useState,useEffect } from 'react'
import Producto from '../components/Producto'

const Inicio = () => {
    const [productos,setProductos]=useState([])
    useEffect(()=>{

        const listaProductos  =  async ()=>{
          try {
            const url ='http://localhost:8080/api/productos'
          const respuesta = await fetch(url)
         // console.log(respuesta)
         const resultado = await respuesta.json()
         //console.log(resultado)
         setProductos(resultado)
            
          } catch (error) {
            console.log(error)
            
          }
          
    
        }
    
        listaProductos()
    
      },[])
  return (
    <>
    <h1 className="font-black text-4xl text-gray-500">Incio</h1>
    <p className='mt-3 text-gray-500'>Productos</p>
     
     <table className="w-full mt-5 table-auto shadow bg-white">
       <thead className="bg-gray-500 text-white">
       <th className="p-2">Id</th>
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
           producto={producto}>

           </Producto>
         ))
       }
           
          

       </tbody>
     </table>
  </>
  )
}

export default Inicio