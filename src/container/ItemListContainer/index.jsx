import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList'
import productos from '../../data/products.json'

const ItemListContainer = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(productos)
            }, 3000)

        })

        promesa
            .then((result) => {
                setProduct(result)
            })
            .catch((errorMsj) => {
                alert('error al cargar')
            })


    }, [])

    return (


        < div >
            <ItemList productos={products} />
        </div >
    )
}

export default ItemListContainer