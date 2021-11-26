import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaShoppingCart } from 'react-icons/fa'


const alertBuy = () => toast.success('Producto Añadido exitosamente');

interface Product {
    id: number,
    name: string,
    description: string,
    value: number,
    quantity: number,
    url?: string
}
interface Props {
    buyProducts: Product[],
    setBuyProducts: Function
}

const Car = ({ buyProducts, setBuyProducts }: Props) => {

    let total:number=0;
    buyProducts.forEach(element => {
        total+=element.quantity*element.value;
    });

    const [flag, setFlag] = useState(false)
    useEffect(() => {
        if (buyProducts.length > 0) {
            alertBuy()
        }

    }, [buyProducts])

    return (
        <>
            <div className="cart-shopping">
                <FaShoppingCart onClick={() => setFlag(!flag)} className="cart-button" />
                <ul className={`list-group cart ${flag ? 'open' : ''}`}>
                    {
                        buyProducts.map((product: Product, i: number) => (
                            <li key={i} className="list-group-item d-flex justify-content-between align-items-center"> {product.name}
                            <span className="badge rounded-pill">{product.quantity}</span></li>
                        ))
                    }
                    <p>Total a pagar: ${total}</p>
                </ul>
            </div>
            <Toaster />
        </>
    )
}
export default Car;