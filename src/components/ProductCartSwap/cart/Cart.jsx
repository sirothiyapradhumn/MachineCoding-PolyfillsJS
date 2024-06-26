import React, { useEffect, useState } from 'react';

const Cart = ({ data }) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {data.length >= 1
          ? data.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })
          : 'EmptytCart'}
      </ul>
    </>
  );
};

export default Cart;
