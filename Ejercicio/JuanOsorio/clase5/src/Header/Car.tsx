import { lutimesSync } from 'fs';
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    value: string;
    quantity: number;
    imgUrl: string;
}

interface Props {
    productsCar: Product[];
    setProductsCar: any;
}



export const Car = ({ productsCar, setProductsCar }: Props) => {

    const [listProductsCar, setlistProductsCar] = useState(false);

    return (
        <div>
            <div className="navbar">
                <nav>
                    <img onClick={() => setlistProductsCar(!listProductsCar)} src="https://bit.ly/32jwKhu" width="30px" height="30px" />
                </nav>
            </div>
            <div className="containerCar">
                <div className="container p-1">
                    <ul className={`ul${listProductsCar ? 'show' : ""}`}>
                        {productsCar.map((productsCar: Product, i: number) => (
                            <li className="list-group-item">{productsCar.name}, Cantidad: {productsCar.quantity}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Car;