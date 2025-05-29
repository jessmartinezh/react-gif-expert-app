export const getGifs = async (category) => {
    const apiKey = "3kgFS6RjpgSLPeMVpuzg5KP6WzrNkMpH";
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const respuesta = await fetch(url);
    const {data = []} = await respuesta.json()
    const gifs = data.map(img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    })
    )
    return gifs;
  };