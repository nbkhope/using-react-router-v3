import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <Link to="/about">About</Link>{' | '}
          <Link to="/products">Products</Link>
        </nav>
        This is the main page (App).
        Here is the content for the selected route:

        {this.props.children}
      </div>
    );
  }
}

export default App;
