import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import React, {  useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from 'react-bootstrap/Image';
import {addItemToCart,removeItemToCart,decreaseCartQty} from '../actions/cartActions';

export default function Cart() {
   const dispatch = useDispatch();
  const [Price,setPrice] = useState(0);
  const cartItems = useSelector((state) => state.cartRed.cart);
  const navigate = useNavigate();
  debugger;
  const handleAddMedicine = (product) =>
  {
    dispatch(addItemToCart(product))
    navigate('/Cart');
  }
  const removeItem =(id) =>
  {
    debugger;
  dispatch(removeItemToCart(id));
  }
  const reduceCartQty=(prd) =>
  {
    debugger;
    dispatch(decreaseCartQty(prd));
  }

   const total=() =>
  {
   
    let p = 0;
    if(cartItems[0] !== null)
    {
     cartItems.map((ele,k) =>
     {
       p = (Number(Object.values(ele.Price)) + p)  * (ele.qty);
     })
     debugger;
     setPrice(p);
     console.log(p);  
     debugger;
    }
  }
 useEffect(() =>
  {
    total();
    debugger;
  },[total])

  console.log(cartItems);
 return(
         <>
         
       
          <div className="cartcontainer m-5 row">
          <div className='d-flex justify-content-center'>
            <Table  className="text-white table table-dark table-striped responsive" striped size="sm"  style={{ width: '25rem'}}>
          <thead>
          <tr>
          <th>Medicine Image</th>
           <th>Medicine Name</th>         
          <th>Price</th>
          <th></th>
          <th></th>
          <th></th>
          </tr>
      </thead>
  
      { cartItems[0] ?
    cartItems.map((medicine,index) => {
      return (
        <tbody  id="tbl" className="m-5 text-center" >      
          <tr key={index}>
           <td><Image  scope="row" src={medicine.MedicineImage} alt={medicine.MedicineImage}  height={200} width={200}/></td>
              <td>{medicine.MedicineName}</td>
              <td>{Object.values(medicine.Price)}</td>
              <td><Button className="ms-5"  variant='secondary'  onClick={() =>handleAddMedicine(medicine)}> +</Button>
              <p className="mt-2 ms-5 text-center"> {medicine.qty}</p>
              <Button className="ms-5"  variant='secondary'  onClick={()=>reduceCartQty(medicine)}> -</Button>
              </td>
              <td></td>
              <td> 
                <Button className="ms-2" variant='secondary'>
                       <FontAwesomeIcon icon={faTrash}  onClick={()=>removeItem(medicine.MedicineID)}  />  
                </Button>
              </td>          
            </tr>
              </tbody>
              )}) :  <h2 className="text-center text-black" style={{}}>Cart is Empty </h2>} 
          
              
              <p className="totalprice ms-4 text-black fw-bold">Total Price:{Price} </p>
              <Button as="input" type="button" className='float-end me-4' variant='dark' onClick={() =>navigate('/Order')} value="Place Order" />
           
            </Table> 
          
          </div>  
          </div>  
          
        
          </>    
 )
      
      }
 
     