const router = require("express").Router();

const userController = require("../controllers/users.js");
const loginController = require("../controllers/login.js");

router.get("/users/", userController.list);
router.get("/users/:id", userController.listOne);
router.post("/users/", userController.create);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

router.post("/login/", loginController.loginUser);

module.exports = router;
