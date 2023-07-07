import Notiflix from 'notiflix';

export const nameIsInContacts = name => {
  Notiflix.Notify.failure(`"${name}" is already in contacts.`);
};

export const contactsAmount = number => {
  if (number === 1) {
    Notiflix.Notify.success(`You have ${number} contact in your Phonebook.`);
  } else if (number !== 0) {
    Notiflix.Notify.success(`You have ${number} contacts in your Phonebook.`);
  }
};
