import React from "react";
import { Product } from "./interfaces/IProduct";
import ProductList from "./ListProducts/ProductList";
import ProductCard from "./ProductCard/ProductCard";

interface Props {
  products: Product[];
  setProducts: any;
  itemBuys: Product[];
  setItemBuys: any;
}

const Body = ({ products, setProducts,itemBuys , setItemBuys }: Props) => {
  return (
    <>
      <div className="container mt-3">
        <ProductList>
          {products.map((product, i: number) => (
            <ProductCard
              key={product.name + i}
              product={product}
              products={products}
              setProducts={setProducts}
              itemBuys={itemBuys}
              setItemBuys={setItemBuys}
              index={i}
            />
          ))}
        </ProductList>
      </div>
    </>
  );
};

export default Body;
