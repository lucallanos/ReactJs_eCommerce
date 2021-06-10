import React from 'react';
import '../ItemListContainer/ItemListContainer.css';

function ItemListContainer({ greeting }) {
    return (
        <div>
            <h1 className='greetingMsg'>{greeting}</h1>            
        </div>
    )
}

export default ItemListContainer;
