import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
  
    const onInputChange=({target})=>{
                                                 //aqui se actualiza el valor con la nueva entrada del usuario
        setInputValue(target.value);
    }

    
    const onSubmit = (event)=> {
        event.preventDefault(); //evita que el valor que se entre sea nulo
        if (inputValue.trim().length<=1) return;
                                                              
        //setCategories(categories =>[inputValue,...categories])
        onNewCategory( inputValue.trim() );   //agrega la nueva categoria a la lista 
        setInputValue('');
    }



    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    
  )
}
