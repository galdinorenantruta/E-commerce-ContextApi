import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { getproductData } from '../ProductStore'

const CartProduct = (props) => {
    const Cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity
    const productData = getproductData(id)

  return (
    <div>
    <h3>{productData.title}</h3>
    <p>{quantity} Total</p>
    <p>${(quantity * productData.price).toFixed(2)}</p>
    <Button size='sm' onClick={()=> Cart.deleteFromCart(id)}>Remove</Button>
    <hr></hr>
    </div>
  )
}

export default CartProduct
