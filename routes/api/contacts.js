const express = require("express");

const router = express.Router();

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const controllers = require("../../controllers");

router.get("/", controllers.getAllContacts);

router.get("/:contactId", controllers.getContactById);

router.post("/", validateBody(schemas.addSchema), controllers.addContact);

router.delete("/:contactId", controllers.deleteContact);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

module.exports = router;
