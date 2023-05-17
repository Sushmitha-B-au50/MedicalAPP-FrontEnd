import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showToastMessage,showInfoToastMessage } from './toastMessages';
import { placeOrder } from '../actions/orderActions';
import { delAllItems } from '../actions/cartActions';


function Order() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartRed.cart);
    const { email, user } = useSelector((state) => state.userRed);
    debugger;
    const   Items = [];
    const [CartNames, setCartNames] = useState([])
    const [TotalPrice, setPrice] = useState(0);
    const [order, setOrder] = useState({
        Address: "",
        PhoneNumber: "",
    });

    useEffect(() => {
        total();
        let p = ""
        cartItems.map((ele, k) => {
            p += (ele.MedicineName + " ");
        })

        setCartNames(p);
    }, []);

    const total = () => {

        let p = 0;
        if (cartItems[0] !== null) {
            cartItems.map((ele, k) => {
                p = (Number(Object.values(ele.Price)) + p) * (ele.qty);
            })
            debugger;
            setPrice(p);
            console.log(p);
            debugger;
        }
    }

    const CartItems = () => {
        debugger;
        if (cartItems[0] !== null) {
            cartItems.map((ele, k) => {
                Items.push({Name:ele.MedicineName, qty:ele.qty});
            })
        }
        //console.log(Cart)
    }

    const { Address, PhoneNumber } = JSON.stringify(order);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        debugger;
        setOrder({ ...order, [name]: value })
    }

    const resOrder = async ()=> {
        try {
            let res = await dispatch(placeOrder({user,email,Items,order,TotalPrice}))
            debugger;
            if (res.status === 200) {
                debugger;
                showToastMessage(res.data.message);
                dispatch(delAllItems());
                navigate("/")
            }
            else {
                //alert(res.response.data.message);
                showInfoToastMessage(res.response.data.message);
            }
        }
        catch (err) {
            //alert(err.data.message);
            showInfoToastMessage(err.response.data);
        }
        }

    const confirmOrder = async () => {
        debugger;
       
        if(order.Address === "" && order.PhoneNumber === "")    
        {
            alert("Address, phoneNumber are required")
        }
        else if(order.Address=== "")
        {
           alert("Address is required")
        }
        else if(order.PhoneNumber === "")
        {
            alert("PhoneNumber is required")
        }
        else{
            CartItems()
            resOrder()
        }
          
    }

    return (
        <div className="m-5">
            <Button size="sm" variant="dark" className="float-end me-4" onClick={() => navigate('/Cart')}>
                Go Back
            </Button>
            <Card className="addprd text-center col-md-6 shadow mx-auto">
                <Card.Title className="display-5 text-black">Order Details</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextID">
                            <Form.Label column sm="5">
                                Name
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Name" name="Name" value={user} readOnly="true" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                                Email
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Email" name="Email" value={email} readOnly="true" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                                cartItems
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" name="cart" value={CartNames} readOnly="true" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                            <Form.Label column sm="5">
                                Address
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Address" name="Address" value={Address} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDetails">
                            <Form.Label column sm="5">
                                Phone Number
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="PhoneNumber" name="PhoneNumber" value={PhoneNumber} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                            <Form.Label column sm="5">
                                TotalPrice
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="TotalPrice" name="TotalPrice" value={TotalPrice} readOnly="true" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Button as="input" variant="dark" type="button" onClick={confirmOrder} value="Confirm Order" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Order;