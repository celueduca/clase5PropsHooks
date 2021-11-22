

interface Product {

    name: string,
    value: string,
    quantity: number,
    
}

const Product = ({ name, value, quantity }: Product) => {
    return (
        <div>
            <h3>{'Nombre: ' +name}</h3>
            <h5>{'Valor: ' +value}</h5>
            <p>{'Cantidad: ' +quantity}</p>
        </div>
    )
}

export default Product
