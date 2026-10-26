import React from 'react'

const Products = ({ products }) => {
    return (
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
            {products.map((product) =>
                <div>
                   <img src={product.thumbnail}></img>
                </div>
            )}
        </div>
    )
}

export default Products