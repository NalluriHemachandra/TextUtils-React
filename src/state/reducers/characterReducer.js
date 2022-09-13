const reducer = (state = 20, action) => {
    if(action.type === 'add'){
        return 20 - action.payload;
    }
    else{
        return state;
    }
}

export default  reducer;