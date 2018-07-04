import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page2 extends Component {
  render() {
    return (
      <div>
        <p>this is page2</p>
        <div>
          <Link to="/Page1">Link to Page1</Link>
        </div>
      </div>
    );
  }
}

export default Page2;
