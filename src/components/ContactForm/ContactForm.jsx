import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';
import { nameIsInContacts } from 'utils/notifications';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    if (!contacts.map(contact => contact.name).includes(name)) {
      dispatch(addContact({ name, phone }));
    } else {
      nameIsInContacts(name);
    }
    form.reset();
  };

  return (
    <form type="submit" className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        id="name"
        type="text"
        name="name"
        placeholder="Enter name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor="phone">
        Number
      </label>
      <input
        className={css.input}
        id="phone"
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
