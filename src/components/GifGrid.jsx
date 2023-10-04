import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/UseFetchGif";
//comunicacion entre componentes = props (propiedades)
export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
    // console.log({images,isLoading});	
    return (
    <>
        <h3>{category}</h3>

		

        <div>
            {
                images.map((image) =>(
                    <GifItem 
                        key={image.id}
                        {...image}
                        url={image.images.downsized_medium.url} 
                    />
                ))
            }
        </div>
    </>
    )
}