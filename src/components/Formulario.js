import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = ({categorias}) => {
  const [categoria, setCategoria] = useState("");
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(nombre+categoria+estado)
    //console.log(objetoProducto)
    try {
      const url = "http://localhost:8080/api/productos";
      /*     
            axios.post(url,{
              nombre:nombre, 
              estado:estado, 
              categoria: categoria

            })
            .then(function (response){
                console.log(response)
            })
            .then(function (error){
                console.log(error)
            });
            /*
            ;
             */

      const objetoProducto = {
        nombre,
        estado,
        categoria: {
          'id': categoria,
        },
      }
      console.log(objetoProducto);
      const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objetoProducto),
        headers: {
          "Content-Type": "application/json",
        },
      });
       
      const resultado = await respuesta.json();
      navigate("/api/productos")
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div>
      <h1 className="text-center font-black text-2xl text-blue-600 mt-3">
        Fomulario
      </h1>

      <div className="w-full max-w-xs ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="nombre" className="text-gray-800 text-xl">
              Nombre
            </label>
            <input
              className=' mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="nombre"'
              id="nombre"
              type="text"
              placeholder="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="nombre" className="text-gray-800 text-xl">
              Estado
            </label>
            <select
              className="form-select
                            appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Disabled select example"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="0">----Selecione----</option>
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </div>

          <div className="mt-3">
            <label htmlFor="nombre" className="text-gray-800 text-xl">
              Categoria
            </label>
            <select
              className="form-select
      appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Disabled select example"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="0">----Selecione----</option>
              {categorias.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nombre}
                </option>
              ))}
            </select>
          </div>

          <input
            type="submit"
            value="Agregar "
            className="mt-5 w-full bg-blue-600 hover:bg-blue-300 p-3 text-white 
                 uppercase font-bold  text-lg rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Formulario;
