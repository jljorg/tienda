import React, { useEffect, useState } from 'react'
import Formulario from '../components/Formulario'

const NuevoProducto = () => {
  //trae los resultados de las categorias y despues las envia por medio de prop al formulario
  const [categorias, setCategorias] = useState([]);
  //console.log(categorias)
 // const [productos,setProductos]=useState([])
  //console.log(productos)
  useEffect(() => {
    const listaCategoria = async () => {
      try {
        const url = "http://localhost:8080/api/categorias";
        const respuesta = await fetch(url);
        // console.log(respuesta);
        const resultado = await respuesta.json();
        // console.log(resultado)
        const arrayCategoria = resultado.map((categ) => {
          const objetoCategoria = {
            id: categ.id,
            nombre: categ.nombre,
          };

          return objetoCategoria;
        });

        setCategorias(arrayCategoria);
      } catch (error) {
        console.log(error);
      }
    };
    listaCategoria();
    
  }, [])
  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
        <p className='mt-3'>Llena los sguientes campos</p>
        <Formulario 
        
        categorias={categorias}
        ></Formulario>

    </>
  )
}

export default NuevoProducto