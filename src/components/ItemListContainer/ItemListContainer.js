import React from 'react';
import './ItemListContainer.css';
//Components
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ greeting }) {
    return (
        <div className='container'>
            <h1 className='greetingMsg'>{greeting}</h1>    
            <ItemCount init={0} stock={5} item={'Ryzen 5 3400G'}/>    
            <ItemCount init={0} stock={3} />
            <ItemCount init={0} stock={7} item={'Motherboard Gigabyte B365 M Aorus Elite'}/>   
        </div>
    )
}

export default ItemListContainer;
