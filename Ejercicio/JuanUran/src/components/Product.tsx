import React from 'react'

interface Props{
    product:any,
    index:number,
    handleBuy:Function
}

const Product = ({product, index, handleBuy}:Props) => {
    return (
        <>
            <div className="col-md-3 mt-3">
                <div className="card product" >
                    <img src={product.url} className="card-img-top img" alt="..." height="150" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">${product.value}</li>
                        <li className="list-group-item">{product.quantity}</li>
                    </ul>
                    <div className="card-body container-button">
                        <button type="button" className="btn btn-success" onClick={()=> handleBuy(index)} disabled={product.quantity===0}>Buy</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Product;
