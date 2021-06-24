import React, {useEffect, useState} from 'react'
//COMPONENTS
import Item from '../Item/Item';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id:0, title: 'Ryzen 5 3400G', price: '$65.000', stock: 10, init: 0, pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_958097-MLA32779890054_112019-O.jpg'},
                    {id:1, title: 'Rtx 3060 Ultra Oc White', price: '$165.000', stock: 5, init: 0, pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_725662-MLA45229819318_032021-O.webp'},
                    {id:2, title: 'Z490 Aorus Xtreme', price: '$120.000', stock: 5, init: 0, pictureURL: 'https://static.gigabyte.com/StaticFile/Image/Global/d4c68f1a8658448d5df671ba132a5386/Product/25004/png/500'},
                    {id:3, title: 'AeroCool Hive', price: '$6.500', stock: 20, init: 0, pictureURL: 'https://aerocool.io/wp-content/uploads/2020/06/Hive-Infographic700x700px-001.png'}
                ])
            }, 2000);
        })
        prom.then((item) => {
            setItems(item);
        })
    }, [])

    console.log(items);
    
    return (
        <div>
            {items.map((item) => <Item key={item.id} item={item}/>)}
        </div>
    )
}

export default ItemList
