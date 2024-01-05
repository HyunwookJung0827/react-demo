import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => { // implicit way to tell interface-Props form
  const [products, setProducts] = useState<string[]>([]);

  // Let's use the effect hook to call the server to fetch the function
  // This is called callback function, because React will call this function back
  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]); // This second argument is the dependency list.
  // If any of them changes, react will rerun our effect
  // If [], it means this is not dependant on any value
  // and it will be executed only once.

  return <div>ProductList</div>;
};

export default ProductList;
