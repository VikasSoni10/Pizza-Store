import React from 'react';
import {useSelector} from 'react-redux';

const Cart = () => {

  const mycart = useSelector((state)=>state.selectCartReducer);
  return (
    <>

    </>
  );
};

export default Cart;
