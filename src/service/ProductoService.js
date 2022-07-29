import axios from "axios";


export class ProductoService{
  
    url = "http://localhost:8080/api/productos";
    guardarProducto(producto){
        return axios.post(this.url,producto).then(res =>res.data);

    }
   

}



