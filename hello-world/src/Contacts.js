import React, { Component } from 'react';
import Creater from './Creater';
import ContactsInfo from './ContactsInfo';
import Remover from './Remover';
import Drop from './Drop';

class ContactsApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactsArray: [],
      selectedContacts : [],
    };
  }

  _addToContacts(newContact) {
    const nextArray = this.state.contactsArray;
    nextArray.push(newContact);
    this.setState({
      contactsArray: nextArray,
    });
  }

  _handleSelected(selected) {
    this.setState({
      selectedContacts: selected,
    });
  }

  _handleRemover(result) {
    this.setState({
      contactsArray: result,
    });
  }

  render() {
    return (
      <div>
        <Creater insertContact={this._addToContacts.bind(this)}/>
        <Remover selectedContacts={this.state.selectedContacts} contacts={this.state.contactsArray} remover={this._handleRemover.bind(this)}/>
        <ContactsInfo handle={this._handleSelected.bind(this)} contacts={this.state.contactsArray}/>
        <Drop/>
      </div>
    );
  }
}

export default ContactsApp;
