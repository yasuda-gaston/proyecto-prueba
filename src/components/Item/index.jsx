import React from 'react'

const Item = ({ products }) => {
    return (
        <div className="card-group">
            <div className="card">
                <img src={products.image} className="card-img-top" alt={'id${product.id'} />
                <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">{products.title}</p>
                    <p className="card-text"><small className="text-muted">{products.price}</small></p>
                </div>
            </div>
        </div>
    )
}

export default Item