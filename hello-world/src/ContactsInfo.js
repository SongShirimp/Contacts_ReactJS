import React, { Component } from 'react';
import Selector from './Selector';

class ContactsInfo extends Component {
  constructor(props) {
    super(props);
  }

  handleSelected(isChecked, contactIndex) {
    const selected = this.state.selectedContacts;
    if (isChecked) {
      selected.push(contactIndex);
    } else {
      selected.splice(selected.indexOf(contactIndex), 1);
    }
    this.props.handle(selected);
  }

  infoArray() {
    const contacts = this.props.contacts;
    const arr = [];
    contacts.forEach((data, index) => {
      arr.push(
        <div>
          <Selector handleSelect={this.handleSelected.bind(this)} value={index}/>
          <span className="name">이름: {data.name}, </span>
          <span className="kakaoID">카카오톡ID: {data.kakaoID}, </span>
          <span className="eMail">E-mail: {data.eMail}</span>
        </div>
      )
    });
    return arr;
  }

  render() {
    return (
      <div>
        {this.infoArray()}
      </div>
    );
  }
}

export default ContactsInfo;
