import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import bookingReducer from '../reducers/bookingReducer';
import userAuthReducer from '../reducers/userAuthReducer';
import productsReducer from '../reducers/productsReducer';
import AdminStateReducer from '../reducers/AdminStateReducer'


const reducer = combineReducers({
    bookingReducer,
    userAuthReducer,
    productsReducer,
    AdminStateReducer

})


// const composedEnhancer = (applyMiddleware(thunk))

// const store = createStore(reducer, composedEnhancer)

const store = createStore(reducer, applyMiddleware(thunk));


export default store