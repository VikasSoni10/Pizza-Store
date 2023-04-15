
const initialState=[];
const selectCartReducer = (state=initialState,{type,payload})=>{
switch(type){
    case "SELECT_CART":return [...state,payload];
	default:return state;
}
}

export default selectCartReducer;