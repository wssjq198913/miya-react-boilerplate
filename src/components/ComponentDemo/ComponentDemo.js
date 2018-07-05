import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentDemo extends Component {
  render() {
    return (
      <div>
        <p>this is {this.props.name}</p>
      </div>
    );
  }
}

ComponentDemo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ComponentDemo;
