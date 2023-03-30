// import PropTypes from 'prop-types';
import { ContactListItem } from 'components/contactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContactsItems, getFilterValue } from '../../redux/selectors';

export const ContactList = () => {
  const contact = useSelector(getContactsItems);
  const filter = useSelector(getFilterValue);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contact.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const contactForRender = filteredContacts();

  return (
    <div>
      <List>
        {contactForRender.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ContactListItem id={id} name={name} number={number} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
//     .isRequired,
//   namefilter: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
