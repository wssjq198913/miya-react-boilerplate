import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

class ComponentDemo2 extends Component {
  constructor() {
    super();
    this.state = {
      clickTimes: 0,
    };
  }

  @autobind
  click() {
    this.setState(prev => ({
      clickTimes: prev.clickTimes + 1,
    }));
  }

  render() {
    const { clickTimes } = this.state;
    return (
      <div>
        <span>{this.props.testProp}</span>
        <button type="button" onClick={this.click}>
          you clicked me {clickTimes} times
        </button>
      </div>
    );
  }
}

ComponentDemo2.propTypes = {
  testProp: PropTypes.number.isRequired,
};

export default ComponentDemo2;
