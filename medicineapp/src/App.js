import Header from './components/navbar';
 import Home from './components/home';
import AdminMedicineList from './components/Admin/medicineListing';
 import Login from './components/login';
 import Signup from './components/signup';
// import AddProduct from './components/Admin/addProduct';
 import EditMedicine from './components/Admin/editMedicine';
// import WCListing from './components/wcListing';
// import MCListing from './components/mcListing';
// import ACListing from './components/otherPrdsListing';
 import Cart from './components/cart';
// import Order from './components/order';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AddMedicine from './components/Admin/addMedicine';
import Order from './components/order';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <div>
        <Header/>
        <Routes>
           <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/adminMedicineList" element={<AdminMedicineList/>}/>
          <Route path="/AddMedicine" element={<AddMedicine/>}/>
          <Route path="/EditMedicine/:id" element={<EditMedicine/>}/>
          <Route exact path="/Cart" element={<Cart />}/>
          <Route exact path="/Order" element={<Order />}/>
        </Routes>
        </div>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
