import React from 'react'
import './Home.css';
// COMPONENTS
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

function Home() {
    return (
        <div>
            <ItemListContainer greeting={'Welcome to Minimum60'} />
        </div>
    )
}

export default Home
