const {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("./contacts-controllers");

const {
  register,
  login,
  current,
  logout,
  updateSubscription,
  updateAvatars,
} = require("./auth-controllers");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
  register,
  login,
  current,
  logout,
  updateSubscription,
  updateAvatars,
};
