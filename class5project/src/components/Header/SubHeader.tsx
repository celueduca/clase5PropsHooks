import { totalmem } from 'os'
import React, { useEffect, useState } from 'react'
import Product from '../Body/Product'
import Car from './Car'

interface Props {
    car: Product[]
}
const SubHeader = ({ car }: Props) => {

    const loadTotal = (): number => {
        let total: number = 0;
        car.forEach(element => {
            total += element.quantity * (parseInt(element.value.replaceAll('$', '').replaceAll('.', '')));
        });

        return total;
    }
    return (
        <>
            {car.length > 0 &&
                <>
                    <h4>Carrito</h4>
                    {car.map((item, i) => (
                        <Car
                            name={item.name}
                            value={item.value}
                            quantity={item.quantity} />
                    ))}

                    <h3>Total: $ {loadTotal()}</h3>
                </>
            }

        </>
    )
}

export default SubHeader
