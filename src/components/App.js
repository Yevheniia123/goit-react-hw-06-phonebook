import React, { Component } from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactList';

class App extends Component {
  state = {};

  // formSubmitHandler = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const sameName = contacts.filter(contact => contact.name.includes(name));

  //   if (sameName.length) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(contacts);
  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <div>
        <SectionTitle title="Phonebook">
          <ContactForm />
        </SectionTitle>

        <SectionTitle title="Contacts">
          <Filter />
          <ContactList />
        </SectionTitle>
      </div>
    );
  }
}

export default App;
