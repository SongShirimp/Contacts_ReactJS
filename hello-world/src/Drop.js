import React, { Component } from 'react';

class Drop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bin"
        onDrop={this.onDrop}>
        <div className="binName">휴지통</div>
      </div>
    );
  }
}

export default Drop;
