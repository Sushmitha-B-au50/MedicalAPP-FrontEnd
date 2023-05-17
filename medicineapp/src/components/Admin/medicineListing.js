import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React, {  useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {loadMedicines,deleteMedicine} from '../../actions/medicineActions';
import Image from 'react-bootstrap/Image';

function AdminMedicineList() {
 const navigate = useNavigate();
  const dispatch = useDispatch();
  const {medicines} = useSelector((state) => state.medRed);
  
useEffect(() =>
{
  dispatch(loadMedicines());

},[medicines]);

const handleDelete =(id) =>
{
  dispatch(deleteMedicine(id))
  navigate("/adminMedicineList")
  
}
      return(
          <>
          <div className="adminHome mt-2">
            <div className="display-5 text-black"> Medicines</div>
            <Button  variant="dark" className= "float-end me-4 mb-3"  size="sm" onClick={() =>  navigate('/AddMedicine')}> Add Medicine </Button>
            <Table  className="adminPrdList text-white table table-dark table-striped" >
          <thead>
          <tr>
          <th>Medicine Image</th>
           <th>Medicine ID</th>
           <th>Medicine Name</th>
          <th>Medicine Details</th>
           <th>Quantity</th>
          <th>Price</th>
         <th>Category</th>
         <th>Actions</th>
          </tr>
      </thead>
              <tbody  id="tbl">
                {medicines && medicines.map((medicine,index) => {  
        return ( 
                 
          <tr key={index}>
            <td>
           <Image  src={medicine.MedicineImage} alt={medicine.MedicineImage}  height={200} width={200}/>
           </td>
              <td>{medicine.MedicineID}</td>
              <td>{medicine.MedicineName}</td>
              <td>{medicine.MedicineDetails}</td>
              <td>{medicine.Quantity}</td>
              <td>{Object.values(medicine.Price)}</td>
              <td>{medicine.Category}</td>
              <td><button> <FontAwesomeIcon icon={faPenToSquare} onClick={() => navigate(`/EditMedicine/${medicine.MedicineID}`)}/></button>
              <button >
                       <FontAwesomeIcon icon={faTrash}  onClick={() =>handleDelete(medicine.MedicineID)}  />  
               </button>
              </td>
            </tr>
      )})} 
              </tbody>
            </Table>
          </div>
      </>
      )
  
  }
 



export default AdminMedicineList;