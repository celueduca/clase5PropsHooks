import React, { useState } from "react";
import Header from "../../Layout/Header/Header";
import data from "../../datat.json";
import useCart from "../../hooks/useCart";
import { constants } from "os";
import { Product } from "../Cards";
import Footer from "../../Layout/Footer/Footer";
import './Cart.css'
interface Props {
  products: Product[];
}
const Cart = () => {
  const { addCart, products } = useCart();
  return (
    <>
      <Header title="MarketPlace" itemsBuy={products}></Header>
      <div className="section">
        <div className="container   d-flex justify-content-center align-items-center ">
          <div className="row align-items-center">
            {
            products.map(
              ({ name, value, quantity, img }: Product, i: number) => (
                <div className="col-md-4 mt-4 mb-4" key={i}>
                  <div className="card text-center backg bg-ligth animate__animated animate__fadeInUp">
                    <div className="overflow">
                      <img
                        src={img}
                        alt="a wallpaper"
                        className="card-img-top"
                      />
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
                          <h5> in Cart: {quantity}</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default Cart;
