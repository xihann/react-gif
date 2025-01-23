import { useState } from "react"
import {AddCategory, GifGrid} from "./components";


export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gift Search App</h1>
      <p>Solo se mostrarán 10 GIFs</p>
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
