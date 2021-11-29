import React from "react";
import Cards from "../Cards";
import { useState } from "react";
import data from '../../datat.json';
import useCart from "../../hooks/useCart";
import Header from "../../Layout/Header/Header";

const Products = () => {
  const [products1, setProducts] = useState(data);
  const [itembuy, setIbuy] = React.useState([]);
  const today = (): number => {
    let year = new Date();

    return year.getFullYear();
  };
  const {addCart, products} =useCart();
  return (
    <>
    <Header title="MarketPlace" itemsBuy={products}></Header>
    <div className="container   d-flex justify-content-center align-items-center ">
        <div className="row align-items-center">
        <Cards
        products={products1}
        setProducts={setProducts}
        addCart={addCart}
      ></Cards>
        </div>
      </div>
  
     
    </>
  );
};
export default Products;
