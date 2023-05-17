import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { addItemToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col'

export default function CardComponent(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.userRed);


    const addToCart = (medicine) => {
        debugger;
        console.log(medicine);
        if (user) {
            dispatch(addItemToCart(medicine))
        }
        else {
            navigate('/Login')
        }
    }
    return (
        <Card style={{ width: '18rem', margin: '20px', maxHeight: "45rem" }} >
            <Card.Img variant="top" src={props.medicine.MedicineImage} style={{ maxHeight: "15rem" }} />
            <Card.Body>
                <Card.Title className="text-black fs-4">{props.medicine.MedicineName}</Card.Title>
                <Card.Text className="text-black fw-bold">
                    {props.medicine.MedicineDetails}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" key={props.medicine.MedicineID}>
                <ListGroup.Item>Price: {'Rs.' + Object.values(props.medicine.Price)}</ListGroup.Item>
                <ListGroup.Item>Category: {props.medicine.Category}</ListGroup.Item>
                <ListGroup.Item>Available Qty: {props.medicine.Quantity}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant='dark' onClick={() => addToCart(props.medicine)}>
                    Add to cart
                </Button>
            </Card.Body>
        </Card>

    )
}