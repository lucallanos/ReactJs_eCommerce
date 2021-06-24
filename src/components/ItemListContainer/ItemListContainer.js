import React from 'react';
import './ItemListContainer.css';
//Components
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ greeting }) {
    return (
        <div className='container'>
            <h1 className='greetingMsg'>{greeting}</h1>
            <div className='item-list-container'>
                <ItemList />
            </div>
        </div>
    )
}

export default ItemListContainer;
