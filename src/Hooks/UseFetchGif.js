
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);   //se encarga de llamar a getgifs y pasar las imagenes
  //a gifgrid
    const getImages = async() =>{
        const newImages= await getGifs(category);
        setImages(newImages);
	      setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
  return {
    images,
    isLoading,
  }
}