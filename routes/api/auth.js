const express = require("express");

const router = express.Router();

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/user");

const { authenticate } = require("../../middlewares");

const controllers = require("../../controllers");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validateBody(schemas.loginSchema), controllers.login);

router.get("/current", authenticate, controllers.current);

router.post("/logout", authenticate, controllers.logout);

router.patch("/", authenticate, controllers.updateSubscription);

module.exports = router;