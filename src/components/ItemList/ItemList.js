import React from "react";
import "./ItemList.css";
//REACT ROUTER DOM
import { Link } from "react-router-dom";
//COMPONENTS
import Item from "../Item/Item";

function ItemList({ items }) {
  //console.log({items});
  return (
    // <div className='itemList'>
    //     {items.map((item) => <Item key={item.id} item={item}/>)}
    // </div>
    <div className="itemList">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Item item={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
