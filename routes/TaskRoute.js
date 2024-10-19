const express = require("express");
const { userAuth } = require("../middleware/auth");
const { createTask, getAllTask, updateTask, deleteTask, changeTaskType } = require("../controllers/TaskController");
const router = express.Router();

router.post("/createTask", userAuth, createTask);
router.post("/getAllTask", userAuth, getAllTask);
router.post("/updateTask", updateTask);
router.post("/changeTaskType", changeTaskType);
router.delete("/deleteTask", deleteTask);

module.exports = router;
