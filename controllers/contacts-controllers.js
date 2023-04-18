const { Contact } = require("../models/contact");
const { HttpError } = require("../helpers");
const { controllerWrapper } = require("../utils");

const getAllContacts = async (req, res) => {
  const data = await Contact.find();
  res.status(200).json(data);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

const addContact = async (req, res) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndDelete(contactId);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: `${data} deleted`,
  });
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContactById: controllerWrapper(getContactById),
  addContact: controllerWrapper(addContact),
  deleteContact: controllerWrapper(deleteContact),
  updateContact: controllerWrapper(updateContact),
  updateStatusContact: controllerWrapper(updateStatusContact),
};
