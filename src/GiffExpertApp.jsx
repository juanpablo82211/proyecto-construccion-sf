
import { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GiffExpertApp = () => {

const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

const onAddCategory=(newCategory)=>{
  if (categories.includes(newCategory)) return;
  setCategories([newCategory,...categories])

} 

    return (
        <>
        <h1>GiffExpertApp</h1>
       
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={(value)=>onAddCategory(value)}
      />
      
        {
          categories.map((category) =>(
                <GifGrid key={category} category={category}/>
          ))
      }
        
        </>
    
  )
}