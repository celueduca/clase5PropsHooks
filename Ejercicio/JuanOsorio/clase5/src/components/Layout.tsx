import React, { useState, useEffect, } from 'react';
import Footer from "./Footer";
import Header from "../Header/Header";

interface Product {
    id: number;
    name: string;
    value: string;
    quantity: number;
    imgUrl: string;
}

const Layout = ({ children }: any) => {


    const dateNow = () => {
        let year = new Date();
        return year.getFullYear();
    }

    return (
        <>
            <Header title="MARKETPLACE" />


            <Footer text="© Celuweb -"
                year={dateNow()}
            />
        </>
    )
}

export default Layout;
