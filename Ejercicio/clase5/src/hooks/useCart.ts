import React, { useState, useEffect } from 'react'
import { Product } from '../components/Cards';
import { User } from '../interface/User'; 

const useCart = () =>{
    

    const [products,setProducts] = useState<Product[]>([]);

    const addCart = (product: Product) => {
        const existe = products.findIndex(
          (producto) => producto.name == product.name
        );
        if (existe == -1) {
          const itembuy = {
            name: product.name,
            value: product.value,
            img:product.img,
            quantity: 1,
          };
          let newListItemBuy:Product[] = [...products, itembuy];
          console.log(itembuy);
          setProducts(newListItemBuy);
        localStorage.setItem("cart", JSON.stringify(newListItemBuy));

        } else {
          products[existe].quantity++;
          let newListItemBuy = [...products];
          console.log(newListItemBuy);

          setProducts(newListItemBuy);
        localStorage.setItem("cart", JSON.stringify(newListItemBuy));

        }
      };
      useEffect(() => {
        const  getItemsCart = localStorage.getItem("cart" ) || "";
        if(getItemsCart !== ""){
          setProducts(JSON.parse(getItemsCart))
        }

      }, [])
      return {
        addCart,
        products
    }
}

export default useCart;