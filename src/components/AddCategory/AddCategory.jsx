import "../../styles/AddCategory.css";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({target}) => {
    setInputValue(target.value);
  };
  const onSubmit = event => {
      event.preventDefault();
      //si el inputValue tiene 1 caracter o menos entonces no se toma en cuenta
      const newValue = inputValue.trim()
      if(newValue.length <= 1)return
      // setCategories(categories => [inputValue, ...categories])
      onNewCategory(newValue)
      setInputValue('')
  }
  return (
    <form onSubmit={event => onSubmit(event)}>
      <input
        type="text"
        className="search"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar gifs"
      />

    </form>
  );
};


