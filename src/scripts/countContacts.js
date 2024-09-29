import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  const contacts = await readContacts();
  const count = contacts.length;
  console.log('Total contacts:', count);
  return count;
};

countContacts();
