
export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bh502DfVEBrQFAsxr1FUNVhWH6sbudW1&q=${category}&limit=5`

    const resp = await fetch(url);

    const {data} = await resp.json();

   const gifs = data.map(img=> ({   //obtiene las imagenes de la api
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

  
    return data
}
