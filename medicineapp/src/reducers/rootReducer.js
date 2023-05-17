import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {userReducer} from "../reducers/userReducer";
import {cartReducer} from "../reducers/cartReducer";
import { medReducer } from './medicineReducer';
import { orderReducer } from '../reducers/orderReducer';


const persistConfig = {
    key:"root",
    storage,
    whiteList:["userRed","medRed","cartRed"]
}

const rootReducer = combineReducers({
    medRed: medReducer,
    userRed: userReducer,
    cartRed:cartReducer,
    orderRed:orderReducer
   
   
  });

export default persistReducer(persistConfig,rootReducer);