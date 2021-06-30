import React from "react";
import "./ItemDetailView.css";
// COMPONENTS
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

function ItemDetailView({ match }) {
  return (
    <div className="itemDetail">
      <ItemDetailContainer id={match.params.id} />
    </div>
  );
}

export default ItemDetailView;
