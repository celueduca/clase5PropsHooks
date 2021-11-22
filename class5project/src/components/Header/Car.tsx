import React from 'react'

interface Product {

    name: string,
    value: string,
    quantity: number,

}
const Car = ({ name, quantity, value }: Product) => {
    return (
        <>
            <h2>{'Nombre: ' + name +
                " - Cantidad: " + quantity
                + ' - Valor: $' + (parseInt(value.replaceAll('$', '').replaceAll('.', '')) * quantity)}</h2>
        </>
    )
}

export default Car
