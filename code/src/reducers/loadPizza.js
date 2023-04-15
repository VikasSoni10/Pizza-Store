
const initialState=[];
const loadPizzaReducer = (state=initialState,{type,payload})=>{
switch(type){
    case "LOAD_PIZZA":return [...payload];
	default:return state;
}
}

export default loadPizzaReducer;