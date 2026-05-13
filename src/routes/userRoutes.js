
const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")

router.post("/", userController.createUser)
router.get("/", userController.getAllUsers)
router.get("/:id", userController.getUser)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

module.exports = router

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/", userController.getAllUsers)
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/", userController.createUser)