import React from "react";


interface Product{

    name:string,
    value:number,
    quantity:number,
}

interface Props{

    productsBuys:Product[],
    setProductsBuys:any,

}


const Car = (props:Props) => {

    let subTotalVar:number = 0;

    const subTotal= () => {

        props.productsBuys.forEach(element => {

            subTotalVar += (element.value * element.quantity);
        });
        return subTotalVar;
    }

    return(

        <div className="carrito">
        <div className="col-md-4 " >
            <div>
            <h1> Carrito De compras : </h1>
            </div>
        <ul className="list-group">
            {props.productsBuys.map((element,i) => (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                {element.name}
                <span className="badge bg-primary rounded-pill">{element.quantity}</span>
              </li>
                
            ))}
        </ul>
        <p>subTotal : {subTotal()}</p>
        </div>
        </div>
    )
}

export default Car;