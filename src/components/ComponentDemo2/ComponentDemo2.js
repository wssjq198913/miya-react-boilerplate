import React, { Component } from 'react';

class ComponentDemo2 extends Component {
  constructor() {
    super();
    this.state = {
      clickTimes: 0,
    };
  }

  click() {
    this.setState(prev => ({
      clickTimes: prev.clickTimes + 1,
    }));
  }

  render() {
    const { clickTimes } = this.state;
    return (
      <div>
        <button type="button" onClick={() => this.click()}>
          you clicked me {clickTimes} times
        </button>
      </div>
    );
  }
}

export default ComponentDemo2;
