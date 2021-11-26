import React, { useState, useEffect, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from "../hook/useAuth";
import Body from "./Body";
import Car from "../Header/Car";
import Footer from "./Footer";
import Header from "../Header/Header";

interface Product {
    id: number;
    name: string;
    value: string;
    quantity: number;
    imgUrl: string;
}

export const Market = ({ children }: any) => {


    const [products, setProducts] = useState([
        { id: 1, name: "producto 1", value: "$15.000", quantity: 50, imgUrl: "https://bit.ly/2Zb0kEH" },
        { id: 2, name: "producto 2", value: "$25.000", quantity: 20, imgUrl: "https://bit.ly/3xg4NTo" },
        { id: 3, name: "producto 3", value: "$44.000", quantity: 10, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_930922-MLM44173333263_112020-O.webp" },
        { id: 4, name: "producto 4", value: "$20.000", quantity: 40, imgUrl: "https://m.media-amazon.com/images/I/61hJprAkP0L._AC_SY450_.jpg" },
        { id: 5, name: "producto 5", value: "$50.000", quantity: 70, imgUrl: "https://bit.ly/3r0RMM8" }]);


    const [productsCar, setProductsCar] = useState<Product[]>([]);

    const addCar = (products: Product) => {

        const idProduct = productsCar.findIndex((product) => product.id == products.id);

        if (idProduct >= 0) {

            const newProducts = [...productsCar];
            newProducts[idProduct].quantity++
            setProductsCar(newProducts);

        } else {
            setProductsCar([...productsCar, { ...products, quantity: 1 }])
        }

    }

    const dateNow = () => {
        let year = new Date();
        return year.getFullYear();
    }

    const history = useHistory()

    const { user } = useAuth();

    const exit = () => {
        localStorage.removeItem("auth");
        history.push("/login");
    }

    return (
        <>
            <Header title="MARKETPLACE"/>


            <Car productsCar={productsCar} setProductsCar={setProductsCar} />

            <Body products={products} setProducts={setProducts} addCar={addCar} />
            <ul>
                <li onClick={() => exit()}> <Link to="">Salir</Link></li>
            </ul>
            <Footer text="© Celuweb -" year={dateNow()}/>
        </>
    )
}

export default Market;