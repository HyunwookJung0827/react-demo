import React from "react";
interface Props {
  cartItems: string[];
  onClear: () => void; // This way the props: cartItems would stay immutable but will be changed by App.tsx
}
const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
