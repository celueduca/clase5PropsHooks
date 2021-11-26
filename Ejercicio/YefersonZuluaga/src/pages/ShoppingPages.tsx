import React, { useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import Body from "../components/Body";
import Car from "../components/Car"
import {Link, useHistory} from 'react-router-dom';
import useAuth from '../hook/useAuth'

interface Product {
    id: number,
    name: string,
    value: number,
    quantity: number,
    url: string;
}

const ShoppingPages = () => {

    const [products, setProducts] = useState([

        { id: 1, name: 'Ferrari', value: 10000, quantity: 50, url: "https://assets.puzzlefactory.pl/puzzle/345/727/original.jpg" },
        { id: 2, name: 'lamborghini', value: 300000, quantity: 30, url: "https://s1.1zoom.me/big0/493/Lamborghini_Aventador_Novitec_Torado_LP_750-4_530080_1280x853.jpg" },
        { id: 3, name: 'porsche', value: 50000, quantity: 30, url: "https://http2.mlstatic.com/D_NQ_NP_963492-MCO47850116506_102021-O.jpg" },
        { id: 4, name: 'mercedes benz', value: 60000, quantity: 25, url: "https://static.carroya.com/vehiculos/1911564/1911564_1_m.jpg" },
        { id: 5, name: 'chevrolet', value: 800000, quantity: 35, url: "https://siempreauto.com/wp-content/uploads/sites/9/2021/01/transformers-1210585_1280.jpg?quality=60&strip=all&w=1200" },
        { id: 6, name: 'mazda', value: 200000, quantity: 3, url: "https://www.elcarrocolombiano.com/wp-content/uploads/2019/08/20190829-MAZDA-3-2020-PRIMEROS-DATOS-EN-COLOMBIA-01.jpg" },

    ]);

    const [productsBuys, setProductsBuys] = useState<Product[]>([]);

    const history = useHistory()

    const { user } = useAuth();

    const exit = () => {
        localStorage.removeItem("auth");
        history.push("/login");
    }

    const yearNow = () => {

        let yearNow = new Date();
        return yearNow.getFullYear();
    }

    return (
        <div>
            <div className="encabezado">
                <Header title=" Concesionario Zuluaga" />

                <button className="btn" type="submit" name="action"><Link to="/login">Login</Link></button>
               
                
            </div>



            <Body products={products} setProducts={setProducts} productsBuys={productsBuys} setProductsBuys={setProductsBuys} />

            
            <Car productsBuys={productsBuys} setProductsBuys={setProductsBuys} />
            
            <Footer text="Celuweb" yearNow={yearNow()} />
        </div>

    );




}
export default ShoppingPages;