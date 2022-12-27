import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList';
import productos from '../../data/products.json'

const ItemListContainer = () => {

    //declaro el estado
    const [products, setProducts] = useState([]);

    //declaro la promesa usando useEffect
    useEffect(() => {

        const promesa = new Promise((acc, rej) => {

            setTimeout(() => {
                acc(productos)
            }, 3000);
        });
        promesa
            .then((result) => {
                setProducts(result)
            })
            .catch((erro) => {
                console.log("llego");
                alert('ERROR')
            })

    }, [])

    return (

        <div>
            <ItemList productos={products} />
        </div>

    )

}

export default ItemListContainer