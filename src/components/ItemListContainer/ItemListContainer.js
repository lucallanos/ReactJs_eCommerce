import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
// TOOLS
import { returnAll } from "../../tools/myAPI";
//Components
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        //Llamamos a nuestra función que retorna todo el array simulando que consumimos una API que nos retorna un array con distintos
        //objetos
        resolve(returnAll());
      }, 2000);
    });
    prom.then((item) => {
      setItems(item);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="greetingMsg">{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
