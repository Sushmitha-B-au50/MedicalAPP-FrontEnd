import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { logout } from '../actions/userActions';
import { delAllItems } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



export default function Navigation() {
    const [adminUser, setadminUser] = useState(false);
    const { user } = useSelector((state) => state.userRed);
    const cartItems = useSelector((state) => state.cartRed.cart);
    debugger;
    console.log(cartItems);

    const cart = () => {
        navigate('/Cart');
    }

    const isAdmin = () => {
        if (user)
            if (user === "admin")
                setadminUser(true);
            else
                setadminUser(false);
    }

    useEffect(() => {
        isAdmin();

    }, [user])


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Logout = () => {
        debugger;
        dispatch(logout());
        dispatch(delAllItems());
        navigate("/");
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">HealthCare Medical Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-2">
                            <Link className='text-white me-3' to="/">Home</Link>
                            {adminUser ? (
                                <Link className='text-white' to="/adminMedicineList">Admin Module</Link>) : null}
                        </Nav>
                        <Nav>
                            {user ? (
                                <>
                                    <Link className="text-white mt-2" onClick={Logout}>Logout</Link>
                                    <div className="text-uppercase text-white m-2" id="loginName">{user}</div></>
                            ) : (<><Link className='text-white mt-2 ' to="/login">Login</Link>
                                <div className="text-uppercase m-2" id="loginName"></div></>)}
                            <div className='float-right'>
                                <FaShoppingCart size={35} className='text-white' onClick={cart} />
                            </div>
                            {(cartItems[0] && cartItems.length > 0) ?
                                (<p className="font-weight-bold text-white">{cartItems.length}</p>) : <p className="font-weight-bold text-white">0</p>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

