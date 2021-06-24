import React from 'react';
import './Item.css';
//Components
import ItemCount from '../ItemCount/ItemCount';

//Tenemos las props propias del componente Item (id, title, price & pictureURL) pero también tenemos las props del componente 
//ItemCount (title, init & stock) que las pasaremos a nuestro componente cuando Item sea llamado.
function Item({ item }) {
    return (
        <div className='item'>
            <img className='img' src={ item.pictureURL } alt='Product logo' />
            <ItemCount item={ item.title } stock={ item.stock } init={ item.init }/>
            <p>{ item.price }</p>
        </div>
    )
}

export default Item;
