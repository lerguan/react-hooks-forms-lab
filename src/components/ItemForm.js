import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item"

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleItemName(e) {
    setItemName(e.target.value)
  }

  function handleItemCategory(e) {
    setItemCategory(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    })
  }
    

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
