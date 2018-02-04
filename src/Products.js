import React from 'react';

const Products = (props) => {
  const productList = ['Product ABC', 'Product DEF', 'Product BCD'];

  if (props.location.query.order === 'descending') {
    productList.sort().reverse();
  }
  else if (props.location.query.order === 'ascending') {
    productList.sort();
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productList.map(product => <li key={product}>{product}</li>)}
      </ul>
    </div>
  );
};

export default Products;
