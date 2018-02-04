import React from 'react';

const ProductProfile = (props) => {
  return (
    <div>
      <h1>Product Profile</h1>
      This is the product profile page
      for the product with id {props.params.productId}
    </div>
  );
};

export default ProductProfile;
