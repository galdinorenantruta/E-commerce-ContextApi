import React, { useState } from 'react'
import {Button, Container, Navbar, Modal, ModalBody} from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import CartProduct from './CartProduct';

const NavbarComponent = () => {
  
  const Cart = useContext(CartContext)
  const [show, setShow] = useState(false);

  const handleClose = ()=>{
    setShow(false)
  }
  const handleShow = ()=>{
    setShow(true)
  }
  const productsCount = Cart.items.reduce((sum, product)=> sum + product.quantity, 0)
  return (
    <>
      <Navbar expand="sm">
          <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
              <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
          </Navbar.Collapse>
      </Navbar>
      <Modal show={show } onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ?
            <>
              <p>items in your Cart:</p>
              {Cart.items.map((currentproduct, idx)=>(
                <CartProduct key={idx} quantity={currentproduct.quantity} id={currentproduct.id}/>
              ))}
              <h1>Total: {Cart.getTotalCost().toFixed(2)}</h1>
              <Button variant='success'>
                Purchase Items
              </Button>
            </>
          :
            <h1>There are no items on your Cart</h1>
          }
      
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent
