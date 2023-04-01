const express = require('express')

const router = express.Router()

const contacts = require('../../models')


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
    const data = await contacts.addContact()
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
        message: "contact deleted"
      })
    }
    // res.json(data)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
