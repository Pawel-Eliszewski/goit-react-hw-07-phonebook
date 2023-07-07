import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectContacts, selectFilter } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { contactsAmount } from 'utils/notifications';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
    contactsAmount(contacts.length);
  }, [contacts.length, dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleUpperCase().includes(filter.trim())
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {error && <p>{error}</p>}
      {contacts.length > 0 ? (
        filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              {`${contact.name}: ${contact.phone}`}
              <button
                className={css.btn}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <p>Your Phonebook is empty</p>
      )}
    </ul>
  );
};
