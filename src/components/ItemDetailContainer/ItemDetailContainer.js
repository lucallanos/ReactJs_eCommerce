import React, { useState, useEffect } from "react";
// TOOLS
import { returnByID } from "../../tools/myAPI";
// COMPONENTS
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({ id }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(returnByID(id));
      }, 2000);
    });
    promise.then((it) => {
      setItem(it);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
