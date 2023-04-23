const express = require("express");

const router = express.Router();

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const controllers = require("../../controllers");

const { authenticate } = require("../../middlewares");

router.get("/", authenticate, controllers.getAllContacts);

router.get("/:contactId", authenticate, controllers.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addContact
);

router.delete("/:contactId", authenticate, controllers.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

module.exports = router;
