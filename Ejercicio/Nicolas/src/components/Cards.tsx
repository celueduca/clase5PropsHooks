import React from "react";
import "./card.css";

interface Props {
  products: Product[];
  setProducts: any;
  addCart:any;
}
export interface Product {
  name: string;
  value: number;
  quantity: number;
  img?: string;
}

const Cards = ({ products, setProducts,addCart}: Props) => {


  const getQuantity = (i: number) => {
    const newQuantity = [...products];
    if (newQuantity[i].quantity > 0) {
      addCart(products[i]);
      newQuantity[i].quantity--;
      setProducts(newQuantity);
    }
    return true;
  };

  
  return (
    <>
      {products.map(({ name, value, quantity, img }: Product, i: number) => (
        <div className="col-md-4 mt-4 mb-4" key={i}>
          <div className="card text-center backg bg-ligth animate__animated animate__fadeInUp">
            <div className="overflow">
              <img src={img} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body backg text-ligth">
              <ul className=" list-group list-group-flush">
                <li className=" backg list-group-item ">
                  <h4 className=" card-title">{name}</h4>
                </li>
                <li className="backg list-group-item">
                  <h5>valor:${value}</h5>
                </li>
                <li className="backg list-group-item">
                  <h5> stock: {quantity}</h5>
                </li>
              </ul>
            </div>
            <button className="fancy" onClick={() => getQuantity(i)}>
              <span className="top-key"></span>
              <span className="text">Buy Now</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
