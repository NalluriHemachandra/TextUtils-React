const reducer = (state = 100, action) => {
    if(action.type === 'add'){
        return 100 - action.payload;
    }
    else{
        return state;
    }
}

export default  reducer;