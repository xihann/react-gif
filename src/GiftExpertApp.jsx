import { useState } from "react"
import {AddCategory, GifGrid} from "./components";


const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Pokémon', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gift Toshi App</h1>
      <p>Solo se mostraran 4 gifs</p>
      {/* Input */}
      <AddCategory
        onNewCategory={value => onAddCategory(value)}
      />

      {/* Listado de Gift */}
      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}

export default GiftExpertApp
