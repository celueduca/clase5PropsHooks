import React from 'react'
import { SymbolDisplayPartKind } from 'typescript'
import Product from './Product'

interface Props {
    products: Product[],
    setProducts: any,
    car: Product[],
    setCar: any
}
const Body = ({ products, setProducts, car, setCar }: Props) => {

    const sold = (item: Product, i: number) => {
        if (item.quantity > 0) {
            item.quantity = item.quantity - 1;
            var productsNew = [...products];
            productsNew[i] = item;
            setProducts(productsNew);

            addCar(item);
        }
    }

    const addCar = (item: Product) => {
        var productsSold = [...car];

        if (productsSold.length == 0) {

            let productAux = { ...item };
            productAux.quantity = 1;
            productsSold.push(productAux);

            setCar(productsSold);

        } else {
            let flag = false;
            for (let i = 0; i < productsSold.length; i++) {
                if (item.name === productsSold[i].name) {
                    let productAux = { ...productsSold[i] };
                    productAux.quantity = productsSold[i].quantity + 1;
                    productsSold.splice(i, 1, productAux)
                    setCar(productsSold);
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                let productAux = { ...item };
                productAux.quantity = 1;
                productsSold.push(productAux)
                setCar(productsSold);
            }
        }
    }
    return (
        <>
            <br />
            {products.map((item, i) => (
                <>
                    <Product
                        name={item.name}
                        value={item.value}
                        quantity={item.quantity} />

                    <button onClick={() => sold(item, i)}>Comprar</button>

                    <hr />
                </>
            ))}
            <br />
        </>
    )
}

export default Body
