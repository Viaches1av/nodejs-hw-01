import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts);
  return contacts;
};

getAllContacts();
