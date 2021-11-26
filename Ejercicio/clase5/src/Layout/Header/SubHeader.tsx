import React, { useEffect, useState } from "react";
import { Button, Dropdown, ListGroup, Modal,  } from "react-bootstrap";
import { Product } from "../../components/Cards";
import './Subheader.css'
interface Props {
  products: Product[];
}
const SubHeader = ({ products }: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [car, setCar] = useState(0);
  const [totalValue,setValue] = useState(0);

  useEffect(() => {
    let totalcar = 0;
    let totalValue=0;
    products.forEach((element) => {
      totalcar = totalcar + element.quantity;
      totalValue=  (totalValue+ (element.value * element.quantity));
    });
    setCar(totalcar);
    setValue(totalValue);
    return () => {};
  }, [products]);
  return (
    <>
    <button
     onClick={handleShow}>
         
  <div className="svg-wrapper-1">
      
    <div className="svg-wrapper">
    <span className="position-absolute   translate-middle badge rounded-pill bg-danger">
          {car}
        </span>
    <i className="fas fa-shopping-cart"></i>
   
    </div>
  </div>
</button>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        {products.map(({ name, value, quantity }: Product, i: number) => (
          <Modal.Body key={i}>
           <ListGroup variant="flush">
           <li className=" list-group-item ">
                  <h4 className=" card-title">{name}</h4>
                  <h5>Quantity: {quantity}</h5>
                  <h5>Price by unit: {value} </h5>

                </li>
  </ListGroup>
          </Modal.Body>
        ))}
        <Modal.Footer>
            <span className="me-auto mb-2 mb-lg-0"><h3>Total</h3></span>
            
            <h3>${totalValue}</h3>
            
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SubHeader;
