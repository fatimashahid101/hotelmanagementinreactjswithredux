const INITIAL_STATE = {
    type:"USERAUTH",
    userAuth:false,
    isLoading:true,
    userProfile:{},


}

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "USERAUTH") {
        // state.data = action.data;
        return {...state,...action};
    }
    else if(action.type === 'UPDATE_USER_PROFILE'){
        state.userProfile = action.userProfile
        return {...state};
    }
    return state;
};



export default reducer