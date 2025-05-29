
import { useFetchGifs } from "../../hooks/useFetchGIfs";
import { GifItem } from "../GifItem/GifItem";

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)

  return (
    <>
      <h2>{category}</h2>
      {/* si isLoading is true se ejecuta lo segundo*/}
      {
        isLoading && (<h2>Cargando...</h2>) 
      }
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};


