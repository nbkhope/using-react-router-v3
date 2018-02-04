import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import About from './About';
import Products from './Products';
import Main from './Main';
import ProductProfile from './ProductProfile';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/products/:productId" component={ProductProfile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
