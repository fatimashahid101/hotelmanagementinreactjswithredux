// import axios from "axios";
// // import { dispatch } from '../../router/Index'
// import { useDispatch } from 'react-redux'



async function getData(dispatch,data) {

    // const apiHandle = axios.create({
    //     baseURL: "https://fakestoreapi.com/products",
    // })
    // await apiHandle.get()
    //     .then((e) => {

    //         let data = e.data
            dispatch({
                type: "PRODUCTS",
                products: data,
                isLoading: false
            })

        // })

}



function changeUserAuth(dispatch, userAuthStatus,userProfile) {
    dispatch({
        type: "USERAUTH",
        userAuth: userAuthStatus,
        userProfile:userProfile,
        isLoading: false
    })

}

let updateUserProfile = (dispatch,dataObj) => {
    dispatch({
        type: "UPDATE_USER_PROFILE",
        userProfile:dataObj,
    })

}


// let updateUserCart = (dispatch,payload) => {
//     dispatch({
//         type: "ADDITEMTOCART",
//         cart:payload,
//     })

// }


let getCartData = (dispatch, payload) => {
    dispatch({
        type: "GETUSERBOOKINGS",
        cart:payload,
        isLoading:false
    })
}

let updateCartData = (dispatch, payload) => {
    dispatch({
        type: "UPDATEBOOKINGS",
        cart:payload,
    })
}


let adminState = (dispatch, state) => {
    dispatch({
        type: "ADMINSTATE",
        admin:state,
        isLoading:false
    })
}
// function getUserData(dispatch, userData) {
    
//     dispatch({
//         type: "USERDATA",
//         userData:userData

//     })

// }






export { getData, changeUserAuth, updateUserProfile, getCartData, adminState, updateCartData }