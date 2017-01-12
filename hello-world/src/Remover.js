import React, { Component } from 'react';

class Remover extends Component {
  constructor(props) {
    super(props);
  }

  handleRemover() {
    let copy = [...this.props.selectedContacts].sort();
    let result = [];
    for (let i = 0; i < this.props.contacts.length; i++) {
      if (copy.indexOf(i) === -1) {
        result.push(i);
      }
    }
    this.props.remover(result);
  }

  render() {
    return(
      <button onClick={this.handleRemover.bind(this)}> 삭제 </button>
    )
  }
}

export default Remover;
