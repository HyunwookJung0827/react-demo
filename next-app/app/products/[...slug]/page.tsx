// [4-Catch-all Segments]
// [...slug] to have an array as a parameter
// [[...slug]] to make it optional as well
// Try: http://localhost:3000/products/grocery/dairy/milk or http://localhost:3000/products/
// import React from "react";
// interface Props {
//   params: { slug: string[] };
// }
// const ProductPage = ({ params: { slug } }: Props) => {
//   return <div>ProductPage {slug}</div>;
// };

// export default ProductPage;

import React from "react";
interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
