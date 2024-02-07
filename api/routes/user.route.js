const express = require("express");
const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.post("/users", createUser);
router.get("/users/:userID", getUser);
router.get("/users", getAllUsers);
router.put("/users/:userID", updateUser);
router.delete("/users/:userID", deleteUser);

module.exports = router;
