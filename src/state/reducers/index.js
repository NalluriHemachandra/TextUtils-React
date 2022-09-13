import { combineReducers } from "redux";
import  characterReducer  from "./characterReducer"

const reducers = combineReducers({
    count : characterReducer
})

export default reducers