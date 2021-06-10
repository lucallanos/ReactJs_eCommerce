import React from 'react';
import '../CartWidget/CartWidget.css';
import CartIcon from '../CartWidget/IconCart.png';

function CartWidget() {
    return (<img className="cartIcon" src={CartIcon} alt={"Cart icon"}/>)
}

export default CartWidget
