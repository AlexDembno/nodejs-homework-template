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
  verify,
  resendVerify,
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
  verify,
  resendVerify,
  login,
  current,
  logout,
  updateSubscription,
  updateAvatars,
};
