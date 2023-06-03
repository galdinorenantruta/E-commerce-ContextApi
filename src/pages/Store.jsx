import React from 'react'
import CardProduct from '../components/ProductCard'
import {Row, Col} from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import { productsArray, getproductData } from '../ProductStore'

const Store = () => {
  return (
    <div>
      <h1 align="center" className='p-3'>Welcome to the Store!!</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index)=>(
            <Col align="center" key={index}>
            <ProductCard product={product}/>
            </Col>

        ))}
        
        
      </Row>  
    </div>
  )
}

export default Store
