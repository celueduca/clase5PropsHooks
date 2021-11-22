import React, { useState, useEffect } from 'react'
import SubHeader from './SubHeader';
import Product from '../Body/Product'

interface Props {
    title: string,
    add?: (n: number) => number //? -> hace que una prop no sea obligatorio ,
    car: Product[]
}

const Header = ({ title, add, car }: Props) => {

    return (

        <div>
            <h1>
                {title + ' ' + (add ? + ' ' + add(5) : '')}
            </h1>


            <SubHeader
                car={car} />
        </div>
    )
}

export default Header