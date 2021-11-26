import React, {useState} from "react";

interface Product{
    id:number,
    name:string,
    value:number,
    quantity:number,
    url:string,
}
interface Props{

    products:Product[],
    setProducts:any,
    productsBuys:Product[],
    setProductsBuys:any;
    
}

const Body = (props:Props) => {

    const [productsBuy, setProductsBuy] = useState<Product[]>([]);

    const buy = (i:number) => {

        const products = [...props.products];
        if(products[i].quantity>0){
        products[i].quantity -= 1;
        props.setProducts(products);
        addCar(props.products[i]);
        //props.buy(props.products[i]);
        }
    }

    const addCar = (product:Product) =>{

        const auxProduct = props.productsBuys.findIndex((productA)=> productA.name == product.name);
      
        if(auxProduct >= 0 ){  
          const auxProducts = [...props.productsBuys];
          auxProducts[auxProduct].quantity ++;
          props.setProductsBuys(auxProducts);
        }else{
         props.setProductsBuys([...props.productsBuys, {...product, quantity:1}] );
        }
      }
 
    return( 

        <div className="container p-4">
        <div className="row">
          
            {props.products.map((product, i) => (
                //<li>{"name  : " + product.name + '  value : '+ product.value + '  quantity :' + product.quantity}</li>

               <div className="col-md-3 mt-4" >                
               <div className="card" >                   
               <div className="card-body">
                 <h5 className="card-title">{product.name}</h5>
                 <img src={product.url} className="card-img-top" alt="..."   />
                 <hr/>
                 <p className="card-text">El valor del producto es : {product.value}</p>
                 <p className="card-text">Cantidad disponible : {product.quantity}</p>
                 <button type="button" className="btn btn-dark" onClick={()=> buy(i) } >Comprar</button >
               </div>
             </div>
             </div>
            ))}
           
        </div>
        </div>
    );
    
}
export default Body;