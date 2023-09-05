import { useState } from "react"
import AddCategoria from "./components/AddCategoria"
import GifGrid from "./components/GifGrid"


const GifExpertApp = () => {
  /* const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'] */
  const [categorias, setCategorias] = useState([''])

  /*   const agregar = () => {
      setCategorias([['Hunter X Hunter'], ...categorias,])
     // setCategorias(cat => [...cat, 'Hunter X Hunter']) 
      console.log(categorias);
    }
    console.log(categorias); */

  return (
    <>
      <h2>Gif Finder App</h2>
      <p>Introduce en el cuadro de búsqueda una o más palabras clave para mostrar el resultado:</p>
      {/* En "<AddCategoria setCategorias={setCategorias} />" se envía la propiedad
        * "{setCategorias} desde el padre "GifExpertApp" al hijo "AddCategoria"
      */}   
      <AddCategoria setCategorias={setCategorias} />
      <hr />
      <ol>
        {
          categorias.map(categoria =>
            <GifGrid key={categoria} categoria={categoria} />
          )
        }
      </ol>
    </>
  )
}
export default GifExpertApp