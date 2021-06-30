import React from 'react';
import './Item.css';

function Item({ item }) {
    return (
        <div className='item'>
            <img className='img' src={ item.pictureURL } alt='Product logo' />
            <p>{ item.price }</p>
            <p>{ item.title }</p>
        </div>
    )
}

export default Item;
