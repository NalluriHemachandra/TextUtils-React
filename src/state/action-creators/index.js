export const addCharacters = (count) => {
    return (dispatch) => {
        dispatch({
            type : 'add',
            payload : count
        })
    }
}
