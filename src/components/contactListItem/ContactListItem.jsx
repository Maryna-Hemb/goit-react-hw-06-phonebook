// import PropTypes from 'prop-types';
import { Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/taskSlice';

export const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContacts(id));
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
  );
};

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
