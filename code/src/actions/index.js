export const loadPizza= (pizzas)=>{
    return {
        type:"LOAD_PIZZA",
        payload: pizzas
    };
};

export const selectCart = (items)=>{
    return{
        type:"SELECT_CART",
        payload:items
    };
};