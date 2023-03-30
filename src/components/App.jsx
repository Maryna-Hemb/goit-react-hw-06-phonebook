import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { TitleH1, TitleH2 } from './App.styled';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return [];
// };

export const App = () => {
  return (
    <Layout>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />

      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
