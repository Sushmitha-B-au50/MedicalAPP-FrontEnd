import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { showInfoToastMessage, showToastMessage } from '../toastMessages';
import { useDispatch } from 'react-redux';
 import { addmedicine } from '../../actions/medicineActions';




function AddMedicine() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [medicine, setMedicine] = useState({
        MedicineID: "",
        MedicineName: "",
        MedicineDetails: "",
        Quantity: "",
        Price: "",
        Category: "",
        MedicineImage: ""
    });




    const { MedicineID,  MedicineName,  MedicineDetails, Quantity, Price, Category,  MedicineImage } = JSON.stringify(medicine);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        debugger;
        if (name === "MedicineImage") {
            debugger;
            var path = e.target.value.replace('C:\\fakepath\\', 'C:\\MEDAPP-Images\\');
            value = path;
        }
        setMedicine({ ...medicine, [name]: value })
        console.log(medicine)
    }

    const resAddMedicine = async () => {
        debugger;
       try {
            let res = await dispatch(addmedicine(medicine))
            debugger;
            if (res.status === 200) {
                debugger;
                showToastMessage(res.data.message);
                navigate("/adminMedicineList")
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
    return (
        <div className="adminAddPrd m-5">
            <Button size="sm" variant="dark" className= "float-end me-4" onClick={() => navigate('/adminMedicineList')}>
                Go Back
            </Button>
            <Card className="addprd text-center col-md-6 shadow mx-auto">
                <Card.Title className="display-5 text-black"> Add Medicine</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextID">
                            <Form.Label column sm="5">
                                Medicine ID
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="MedicineID" name="MedicineID" value={MedicineID} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                            Medicine Name
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="MedicineName" name="MedicineName" value={MedicineName} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDetails">
                            <Form.Label column sm="5">
                            Medicine Details
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="MedicineDetails" name="MedicineDetails" value={MedicineDetails} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextQunatity">
                            <Form.Label column sm="5">
                                Quantity
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="Quantity" name="Quantity" value={Quantity} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                            <Form.Label column sm="5">
                                Price
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="number" placeholder="Price" name="Price" value={Price} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCategory">
                            <Form.Label column sm="5">
                                Category
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Category" name="Category" value={Category} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formFile" className="mb-3">
                            <Form.Label column sm="5">
                            Medicine Image
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="file" name="MedicineImage" value={MedicineImage} onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Button as="input" variant="dark" type="button" onClick={resAddMedicine} value="Submit" />
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AddMedicine;