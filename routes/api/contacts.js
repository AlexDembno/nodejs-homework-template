const express = require('express')
const Joi = require('joi')

const router = express.Router()

const contacts = require('../../models')

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})


router.get('/', async (req, res, next) => {
 try {
  const data = await contacts.listContacts();
  res.status(200).json(data)
 } catch (error) {
  res.status(500).json({
    message: error.message,
  })
 }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const data = await contacts.getContactById(contactId);
    if(!data) {
      return res.status(404).json({
        message: "Not found"
      })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {error} = addSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: "missing required name field"
      })
    }
    const data = await contacts.addContact(req.body)
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const data = await contacts.removeContact(contactId)
    if (!data) {
      res.status(404).json({
        message: "Not found"
      })
      res.status(200).json({
        message: `${data} deleted`
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

router.put('/:contactId', async (req, res, next) => {
  try { 
    const {error} = addSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: "missing fields"
      })
    } 
    const {contactId} = req.params;
    const data = await contacts.updateContact(contactId, req.body)
    if (!data) {
    res.status(404).json({
      message: "Not found"
    })
    }
    res.status(200).json(data)
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

module.exports = router
