import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page1 extends Component {
  render() {
    return (
      <div>
        <p>this is page1</p>
        <div>
          <Link to="/Page2">Link to Page2</Link>
        </div>
      </div>
    );
  }
}

export default Page1;
