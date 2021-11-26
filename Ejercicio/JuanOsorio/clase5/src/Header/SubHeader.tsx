import React , {useEffect, useState} from "react";
import Body from "../components/Body";
import Car from "./Car";
import Header from "./Header";


interface Product {
    name: string;
    value: string;
    quantity: number;
    imgUrl: string;
}

interface Props {
    products: Product[];
    setProducts: any;
    cart:[];
}
const SubHeader = ({ products, setProducts }: Props) => {




    const [flag, setflag] = useState (false)
    useEffect(() => {
        if(products.length > 0){
            setflag(true)
        }
    }, [])

    return(
        <>
        
            {/*
                flag &&

                products.map((products: Product, i: number) => (
                   
                ))
            */}
        </>
    )
}

export default SubHeader;