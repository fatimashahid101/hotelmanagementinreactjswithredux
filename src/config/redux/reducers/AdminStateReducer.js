const INITIAL_STATE = {
    type: "ADMINSTATE",
    admin: false,
    isLoading:true
}

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "ADMINSTATE") {
        return { ...state, ...action }
    }
    else {
        return state;
    }

};



export default reducer