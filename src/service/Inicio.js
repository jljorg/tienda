import React, { useState,useEffect } from 'react'

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
    <h1 className="font-black text-4xl text-blue-900">Incio</h1>
    <p className='mt-3'>Productos</p>
     
     <table className="w-full mt-5 table-auto shadow bg-white">
       <thead className="bg-blue-800 text-white">
         <th className="p-2">Nombre</th>
         <th className="p-2">Empresa</th>
         <th className="p-2">Email</th>
         <th className="p-2">Telefono</th>
         <th className="p-2">Nota</th>
         <th className="p-2">Acciones</th>
       </thead>
       <tbody>
           
      

       </tbody>
     </table>
  </>
  )
}

export default Inicio