
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Formulario from './components/Formulario';
import ListaDatos from './components/ListaDatos';
import Layout from './layout/Layout';
import Inicio from './pages/Inicio';
import NuevoProducto from './pages/NuevoProducto';
function App() {
  const [categorias, setCategorias] = useState([]);
  //console.log(categorias)
  const [categoria, setCategoria] = useState("");
  const [productos,setProductos]=useState([])
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
  /*
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
  */
  
  
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/api/productos" element={<Layout></Layout>} >

    <Route index  element={<Inicio></Inicio>} />
    <Route path="nuevo" element={<NuevoProducto/>} />

    </Route>
    </Routes>
    </BrowserRouter>
    /*
    <div className="App">
      <h1 className="font-black text-4xl text-black text-center">Hola</h1>
      
        <Layout></Layout>
      <Formulario 
      categoria={categoria}
      setCategoria={setCategoria}
      categorias={categorias} ></Formulario>
          <div className='mt-5'>
      <ListaDatos 
      productos={productos}
      categorias={categorias} ></ListaDatos>
      </div>
      
    </div>
    */
  )
}

export default App;
