import React, { useState } from 'react'

interface Product {
    id:number;
    name: string;
    value: string;
    quantity: number;
    imgUrl: string;
}

interface Props {
    products: Product[];
    setProducts: any;
    addCar: Function;
};


const Body = ({ products, setProducts, addCar}: Props): JSX.Element => {

    const handleButton = (i: number, done: boolean) => {
        const newProducts: Product[] = [...products];
        if (done == true && newProducts[i].quantity >= 1) {
            newProducts[i].quantity--
            addCar(products[i]);
        }

        setProducts(newProducts);

    }
    return (
        <>
            <div className="container p-1"></div>
            <div className="container p-4">
                <div className="row">
                    {products.map((products: Product, i: number) => (
                        <div className="col-md-3 mt-4">
                            <div className="card">
                                <img height="260" className="card-img-top" src={products.imgUrl} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{products.name}</h5><hr />
                                    <p className="card-text">Valor: {products.value}</p>
                                    <p className="card-text"> Unidades: {products.quantity}</p>
                                    <button className="btn btn-primary" onClick={() => handleButton(i, true)} type="submit">Comprar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Body


