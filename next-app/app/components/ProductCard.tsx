// [Solve interactivity issue]
// 1. Make ProductCard.tsx client components

// 'use client'; // to include this in client components instead of server components
// import React from "react";

// const ProductCard = () => {
//   return (
//     <div>
//       <button onClick={() => console.log("Click")}>Add to Cart</button> // error by no interactivity in server components
//     </div>
//   );
// };

// export default ProductCard;

// 2. Make the button client components
import React from "react";
import AddToCard from "./AddToCard";

const ProductCard = () => {
  return (
    <div>
      <AddToCard />
    </div>
  );
};

export default ProductCard;
