import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {React,useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
 import { login } from '../actions/userActions';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showToastMessage,showInfoToastMessage } from './toastMessages';


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const resLogin = async (values)=> {
        debugger;
        try{
            let res =  await dispatch(login(values))
            debugger;
           
            if(res.status ===200)
            {
                debugger;
                navigate("/");
                showToastMessage(res.data.message);
            }
            else{
                //alert(res.response.data.message);
                showInfoToastMessage(res.response.data.message);
            }
            }
            catch(err)
            {
                //alert(err.data.message);
                showInfoToastMessage(err.data.message); 
            }
        }
        const {user} = useSelector((state) => state.userRed);

        useEffect(()=>
        {
          if(user)
          {
            console.log("user is " + user);
          }
      
        },[user])
    
    const handleSubmit = (e) =>
    {
        debugger;
        e.preventDefault();
        console.log({email,password})

        if(!email && !password)
            showToastMessage ("email and password are required");
        else if(!password)
            showToastMessage ("password is required");
        else if(!email)
            showToastMessage ("email is required");
        else{

            resLogin({email,password});
        }
    }
    return (
        <div>
             <Container className="login">
                <Row>
                    <Col> <Card className="text-center m-5 w-40 h-60 text-black col-md-6 shadow mx-auto">
                            <Card.Title className="display-6 m-3">Log in</Card.Title>
                            <Card.Body className="mb-3 ms-5 me-5">
                                <Form>
                                <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicEmail">
                                        <Form.Label  className="font-weight-bold" >Email address</Form.Label>
                                        <Form.Control type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicPassword">
                                        <Form.Label  className="font-weight-bold" >Password</Form.Label>
                                        <Form.Control type="password"  onChange={(e) => {setPassword(e.target.value)}}/>
                                    </Form.Group>
                                    <div className="m-3 c gap-4">
                                    <Button variant="dark" className="font-weight-bold" size="lg" onClick={handleSubmit}>
                                    Log In
                                    </Button>
                                       <p className="m-5 text-black"> Don't have an account?  <Link to="/signup" className='text-black'>Sign up</Link></p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card></Col>
                        <ToastContainer />
                </Row>
            </Container>   
        </div>
    );
}

