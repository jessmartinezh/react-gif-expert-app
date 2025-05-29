import "./styles/styles.css";
import {AddCategory , GifGrid}from "./components/";
import { useState } from "react";

const App = () =>{
  const [categories, setCategories] = useState(["Demon Slayer"]);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return

   
    setCategories([newCategory, ...categories]);
    
  };
  return (
    <>
      <h3>Gif Expert App</h3>
      <AddCategory onNewCategory={onAddCategory} />
        {categories.map((category) => 
           (<GifGrid key={category} category={category}/> )
        )}
    </>
  );
}
export default App;

