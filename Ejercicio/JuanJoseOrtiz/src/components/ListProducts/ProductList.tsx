import React from "react";

interface Props {
  children: any;
}

const ProductList = ({ children }: Props) => {
  return (
    <section>
      <p className="fs-4 "> Listado de productos</p>
      <div className="row">{children}</div>
    </section>
  );
};

export default ProductList;
