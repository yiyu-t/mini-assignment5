import { combineReducers } from "redux";

function countReducer(state = '0', action) {
    if (action.type === 'ADD') {
        return parseInt(state) + 1;
    } else if (action.type === 'MINUS'){
        return parseInt(state) - 1;
    }
    return state;
}

export default combineReducers({
    sum: countReducer,
})