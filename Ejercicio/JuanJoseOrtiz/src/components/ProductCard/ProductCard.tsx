import React from "react";
import "./ProductCard.css"
import { Product } from "../interfaces/IProduct";
interface Props {
  product: Product;
  products: Product[];
  setProducts: any;
  index: number;
  itemBuys: Product[];
  setItemBuys: any;
}
const ProductCard = ({
  product,
  setProducts,
  itemBuys, // []
  setItemBuys,
  products,
  index,
}: Props) => {
  const buyItem = (index: number) => {
    const newListProducts = [...products];
    if (newListProducts[index].quantity !== 0) {
      addBuyItem(newListProducts[index]);
      newListProducts[index].quantity--;
      setProducts(newListProducts);
    }
    
  };

  const addBuyItem = (productBuy: Product) => {
    const findProduct: number = itemBuys.findIndex(
      (element) => element.name === productBuy.name
    );
    console.log(findProduct)
    if (findProduct === -1) {
        const itemBuy = {
            name: productBuy.name,
            value: productBuy.value,
            quantity: 1,
        };
        let newListItemBuys:Product[] = [...itemBuys , itemBuy]; // [ {name, value, quantity}]
        setItemBuys(newListItemBuys);
    } else {
        itemBuys[findProduct].quantity++;
        let newListItemBuys:Product[] = [...itemBuys];
        setItemBuys(newListItemBuys);
    }
  };

  return (
    <React.Fragment>
      <div className="col-12 col-md-6 col-lg-4 ">
        <div className="card mb-3 card-container">
          <img
            src={product.url}
            height="500"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="fs-6">{product.name}</p>
            <p className="card-text text-info fw-bolde fs-5">$ {product.value}</p>
          </div>
          <div className="card-footer text-muted">
            <div className="d-flex justify-content-between">
              <p className="card-text">
                Stock disponible: {product.quantity}
              </p>
              <button className="btn btn-outline-info" onClick={() => buyItem(index)}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
