import React from 'react';
import history from './history';

const Main = (props) => (
  <div>
    This is the initial page. Welcome!

    <div>
      <button
        type="button"
        onClick={() => props.router.push('/products')}
      >
        Click here to go to Products
      </button>
    </div>
  </div>
);

export default Main;
