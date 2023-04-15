import loadPizzaReducer from "./loadPizza";
import {combineReducers} from 'redux';
import selectCartReducer from "./selectCart";


const rootReducer = combineReducers({
    loadPizzaReducer,
    selectCartReducer
});

export default rootReducer;