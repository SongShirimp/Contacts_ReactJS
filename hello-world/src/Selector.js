import React, { Component } from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
  }

  handleChangeCheck(event) {
    const isChecked = event.target.checked;
    const contactIndex = +event.target.value;
    this.props.handleSelect(isChecked, contactIndex);
  }

  render() {
    return(
      <input value={this.props.value} type="checkbox" onChange={this.handleChangeCheck.bind(this)}/>
    )
  }
}

export default Selector;
