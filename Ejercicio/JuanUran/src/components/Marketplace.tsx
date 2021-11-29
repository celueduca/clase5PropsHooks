import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Car from "../components/Car";
import Body from '../components/Body';
import { Link, useHistory } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import { FaAngleLeft } from 'react-icons/fa'

const productsList = [
    { id: 1, name: "Manzanas", description: "product", value: 1000, quantity: 40, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6bUJHStEx-wScFn3iZRJL20Cza-4KNNxzg&usqp=CAU" },
    { id: 2, name: "Banano", description: "product", value: 500, quantity: 50, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBmkjtfo6ZIVc0LJmYhtVWMkbmggmNuGVyg&usqp=CAU" },
    { id: 3, name: "Pera", description: "product", value: 1500, quantity: 60, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkiYtEWPlBb2SA3Z7k1rrrc2SAlaePcmkdQ&usqp=CAU" },
    { id: 4, name: "Uva", description: "product", value: 4000, quantity: 25, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtKdClSZa6mZSOm7ruuKF4F4yVxZk9qf-l-Q&usqp=CAU" }
]

interface Product {
    id: number,
    name: string,
    description: string,
    value: number,
    quantity: number,
    url?: string
}

const Marketplace = () => {
    const [products, setProducts] = useState(productsList);
    const [buyProducts, setbuyProducts] = useState<Product[]>([]);


    const handleCartShop = (product: Product) => {
        const productBuyIndex = buyProducts.findIndex((prod) => prod.id === product.id)

        if (productBuyIndex >= 0) {
            const auxProductBuy = buyProducts;

            auxProductBuy[productBuyIndex].quantity++;

            setbuyProducts(auxProductBuy);
        } else {
            setbuyProducts([...buyProducts, { ...product, quantity: 1 }]);
        }
    }
    const history = useHistory()

    const { user } = useAuth();

    const exit = () => {
        localStorage.removeItem("auth");
        history.push("/login");
    }

    const add = (number: number): number => {
        return number + 1;
    }

    const yearNow = () => {
        const year = new Date();
        return year.getFullYear();
    }
    return (
        <>
            <div className="header-container">
                <Header title="Mi tienda virtual" add={add} />
                <Car buyProducts={buyProducts} setBuyProducts={setbuyProducts} />
                <FaAngleLeft onClick={() => exit()} className="exit-button"/>
            </div>
            <Body products={products} setProducts={setProducts} handleCartShop={handleCartShop} />
            <Footer text="Celuweb" year={yearNow()} />
        </>
    )
}

export default Marketplace
