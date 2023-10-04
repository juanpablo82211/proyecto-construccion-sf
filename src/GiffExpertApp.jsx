
import { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GiffExpertApp = () => {

const [categories, setCategories] = useState([]);

const onAddCategory=(newCategory)=>{
  if (categories.includes(newCategory)) return; //aqui pasa la categoria que se envio en addcategory y la almacena 
  setCategories([newCategory,...categories])  //verificando si esta en la lista 

} 

    return (
        <>
        <h1>GiffExpertApp</h1>
       
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={(value)=>onAddCategory(value)}  //este el evento padre hijo 
      />
      
        {
          categories.map((category) =>(                 //se muestra la lista de las categorias mediante un mapa
          //aqui pasa un prop (category={category}) a grid para que haga un mapa con la category
          //luego mapea los mapas 
                <GifGrid key={category} category={category}/>// para crear multiples instancias del componente grid
                
          ))
      }
        
        </>
    
  )
}