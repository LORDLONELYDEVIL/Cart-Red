import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";//dispatch actions
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import Alert  from "react-bootstrap/Alert";
import statusCode from "./StatusCode";



const Products = () => {

  // const [products,getProducts]=useState([]);
  const dispatch=useDispatch();
  const {data:products,status}=useSelector(state=>state.products);

  useEffect(()=>{
    // fetch("https://fakestoreapi.com/products")
    // .then(data=>data.json())
    // .then(result=>getProducts(result))
    dispatch(getProducts());

  },[]);
  if(status==statusCode.PENDING){
    return(<p>loading products...</p>);
  }
  if(status==statusCode.ERROR){
    return(<Alert key="danger" variant="danger">Something went Wrong !!! Try Again Later</Alert>);
  }

  //console.log(products);
  // const dispatch=useDispatch();

 function addToCart(product){
  dispatch(add(product));

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
      <Button variant="dark w-100" onClick={()=>addToCart(product)}>AddToCart</Button>
        
      </Card.Footer>
    </Card>
    </div></Container>))
  

  return (
    <div className="container  ps-5 me-5 mt-4 ">
      <h3 className="text-center  text-dark  "> PRODUCT DASHBOARD</h3>
      
      <div className="row flex-wrap ">
      
        
        {cards}
        
       
      </div>
      
    </div>
  )
}

export default Products