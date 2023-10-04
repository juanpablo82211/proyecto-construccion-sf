import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/UseFetchGif";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
    console.log({images,isLoading});	
    return (
    <>
        <h3>{category}</h3>

	<h2>Cargando...</h2>	

        <div>
            {
                images.map((image) =>(
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
    </>
    )
}