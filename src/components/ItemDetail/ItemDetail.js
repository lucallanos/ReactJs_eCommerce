import React from "react";
import "./ItemDetail.css";
// COMPONENTS
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="itemDetail-container">
      <img src={item.pictureURL} alt="Item-Logo" width="400" height="400" />
      <div className="itemDetail-textAndCount">
        <p>{item.price}</p>
        <ItemCount init={item.init} stock={item.stock} item={item.title} />
        {console.log(
          "Init",
          item.init,
          "Stock",
          item.stock,
          "Title",
          item.title
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
