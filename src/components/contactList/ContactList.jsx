// import PropTypes from 'prop-types';
import { ContactListItem } from 'components/contactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contact = useSelector(state => state.contacts);

  return (
    <div>
      <List>
        {contact.map(({ id, name, number }) => (
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
