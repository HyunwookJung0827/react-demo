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
// import React from "react";
// import AddToCard from "./AddToCard";

// const ProductCard = () => {
//   return (
//     <div>
//       <AddToCard />
//     </div>
//   );
// };

// export default ProductCard;

// // [3-CSS Modules]
// import React from "react";
// import AddToCard from "./AddToCard";
// import styles from './ProductCard.module.css'; // styles is a javascript object

// styles.card
// const ProductCard = () => {
//   return (
//     <div className={styles.card}>
//       <AddToCard />
//     </div>
//   );
// };

// export default ProductCard;

// [4-Tailwind CSS]
// import React from "react";
// import AddToCard from "./AddToCard";

// const ProductCard = () => {
//   return (
//     <div className="p-5 my-5 bg-sky-400 text-white text-3xl hover:bg-sky-500">
//       <AddToCard />
//     </div>
//   );
// };

// export default ProductCard;

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