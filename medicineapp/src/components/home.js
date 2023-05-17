import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card from './card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { loadMedicines } from '../actions/medicineActions';



export default function Home() {
    const dispatch = useDispatch();
    const { medicines } = useSelector((state) => state.medRed);

    const [searchField, setSearchField] = useState("");

    const filteredMedicines = medicines.filter(
        medicine => {
            return (

                medicine.Category.toString().toLowerCase().includes(searchField.toString().toLowerCase()) ||
                medicine.MedicineName.toString().toLowerCase().includes(searchField.toString().toLowerCase())

            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);

    };

    useEffect(() => {
        dispatch(loadMedicines());

    }, []);



    return (
        <>
            <Form className="m-5 text-center">
                <Col sm="5" className="m-5">
                    <Form.Control
                        type="search"
                        placeholder="Search" onChange={handleChange}
                        aria-label="Search"
                    />
                </Col>
            </Form>
            <div className='d-flex'>
                {filteredMedicines && filteredMedicines.map((medicine, index) => (
                    <Card medicine={medicine} key={medicine.MedicineID} />
                ))}
            </div>
        </>
    );
}

  // export {Category};