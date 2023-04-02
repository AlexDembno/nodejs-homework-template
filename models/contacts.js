const fs = require('fs/promises');
const { nanoid } = require("nanoid");
const path = require("path");


const contactsPath = path.join(__dirname,"contacts.json");

const listContacts = async () => {
  const allContacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(allContacts);
}

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const result = allContacts.find((el) => el.id === contactId);
  return result || null;
}

const addContact = async ({name, email, phone}) => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
}

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((el) => el.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return result;
}

const updateContact = async (contactId, body) => { 
  const allContacts = await listContacts();
  const index = allContacts.findIndex((el) => el.id === contactId);
  if (index === -1) {
    return null;
  }

  allContacts[index] = {contactId, ...body}
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
