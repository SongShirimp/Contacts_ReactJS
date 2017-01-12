import React, { Component } from 'react';

class Creater extends Component {
  constructor(props) {
    super(props);
    this.addToContacts = this.addToContacts.bind(this);
  }

  addToContacts() {
    const newContact = {
      name: this.name.value,
      kakaoID: this.kakaoID.value,
      eMail: this.eMail.value
    };
    if (!newContact.name || !newContact.kakaoID || !newContact.eMail) {
      return;
    }

    this.props.insertContact(newContact);

    this.name.value = '';
    this.kakaoID.value = '';
    this.eMail.value = '';
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.addToContacts();
    }
  }


  render() {
    return (
      <div style={{display: "inline-block"}}>
        <input type="text" name="name" placeholder="이름" ref={(input) => {this.name = input;}}/>
        <input type="text" name="kakaoID" placeholder="카카오톡ID" ref={(input) => {this.kakaoID = input;}}/>
        <input type="text" name="eMail" placeholder="E-mail" ref={(input) => {this.eMail = input;}} onKeyDown={this.handleKeyPress.bind(this)}/>
        <button onClick={this.addToContacts}> ADD! </button>
      </div>
    );
  }
}

export default Creater;
