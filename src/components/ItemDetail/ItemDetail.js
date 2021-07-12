import React, { useState } from "react";
import "./ItemDetail.css";
// COMPONENTS
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  const [amount, setAmount] = useState(0);

  const onAdd = (amount) => {
    setAmount(amount);
  };

  // console.log("amount", amount);
  // console.log("test");

  return (
    <div className="itemDetail-container">
      <div className="itemDetail-imgAndPriceAndCount">
        <img src={item.pictureURL} alt="Item-Logo" width="400" height="400" />
        <div className="itemDetail-priceAndCount">
          <p>{item.title}</p>
          <p>{item.price}</p>
          <ItemCount
            init={item.init}
            stock={item.stock}
            item={item.title}
            onAdd={onAdd}
          />
        </div>
      </div>
      <div className="itemDetail-description">
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          nesciunt recusandae debitis officiis nobis eveniet vero laudantium
          enim saepe porro hic adipisci quas at itaque magnam inventore
          voluptas, dolore sint. Itaque dolor vitae eaque aliquam nemo et,
          maxime culpa explicabo at minima voluptatum sapiente consequuntur,
          unde soluta perspiciatis consectetur tenetur doloremque nihil,
          molestiae facere! Aut, at culpa! Labore, ipsam aliquid.
        </p>
      </div>
    </div>
  );
}

export default ItemDetail;
