import React, { useState } from 'react'
import Product from './Product'


interface Product {
    id: number,
    name: string,
    description: string,
    value: number,
    quantity: number,
    url?: string
}
interface Props {
    products: Product[],
    setProducts: Function,
    handleCartShop: Function
}


const Body = ({ products, setProducts, handleCartShop }: Props) => {


    const handleBuy = (i: number) => {
        const tempProduct = [...products];
        if (tempProduct[i].quantity > 0) {
            tempProduct[i].quantity--;
            setProducts(tempProduct);
            handleCartShop(tempProduct[i])
        }
    }
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    {
                        products.map((product: Product, i: number) => (
                            <Product product={product} key={product.id} index={i} handleBuy={handleBuy} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Body;
