import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VerProducto = () => {
  const [productos, setProductos] = useState({});
  console.log(productos);
  const { id } = useParams();
  useEffect(() => {
    const listaProductos = async () => {
      try {
        const url = `http://localhost:8080/api/productos/${id}`;
        const resultado = await fetch(url);
        // console.log(resultado)
        const respuesta = await resultado.json();
        //console.log(respuesta)

        setProductos(respuesta);
      } catch (error) {
        console.log();
      }
    };
    listaProductos();
  }, []);

  return (
    <div>
      <h1 className="font-black text-3xl text-gray-500">
        Producto por id {productos.nombre}{" "}
      </h1>
      <p className="mt-10 text-2xl text-gray-500 ">Consulta Cliente</p>
      <p className="text-2xl text-gray-700">
        <span className="uppercase font-bold">Producto : </span>
        {productos.nombre}
      </p>
      <p className="text-2xl text-gray-700">
        <span className="uppercase font-bold">Producto : </span>
        {productos.estado}
      </p>
      <p className="text-2xl text-gray-700">
        <span className="uppercase font-bold">Producto : </span>
        {productos.categoria} cuando liste categoria
      </p>
     
    </div>
  );
};

export default VerProducto;
