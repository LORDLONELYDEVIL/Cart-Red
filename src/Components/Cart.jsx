import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch=useDispatch();
    
    const products=useSelector(state=>state.cart);
    console.log(`cart list ${products}`);
    function RemoveToCart(id){
        //remove action
        dispatch(remove(id));



    }



    const cards=products.map((product)=>(
        <Container className=" row gy-3 col gx-0  ">
        <div key={product.id} className="col-md-3  ">  
        <Card style={{ width: '18rem' ,height:"25rem"}}>
          <Card.Img className="text-align-center ps-5 pe-5 pt-2" variant="top" src={product.image} height="230px" width="90px" />
          <Card.Body>
            <Card.Title style={{fontSize:"10px"}}>{product.title}</Card.Title>
            <Card.Text>
              {product.price}
            </Card.Text>
            
          </Card.Body>
          <Card.Footer style={{textAlign:"center",border:"none",}} className="bg-none border-none pt-0 pb-4">
          <Button variant="dark w-100" onClick={()=>RemoveToCart(product.id)}>RemoveToCart</Button>
            
          </Card.Footer>
        </Card>
        </div></Container>))
  return (
    <div className='text-center justify-content-center align-items-center'>
       <h1 > Cart {products.length}</h1>
       <div className='row flex-wrap justify-content-center align-items-center ms-5'> 
            {cards}
       </div>
        
    </div>
  )
}

export default Cart