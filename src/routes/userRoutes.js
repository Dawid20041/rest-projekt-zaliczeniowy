const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/", userController.getAllUsers)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post("/", userController.createUser)

router.get("/:id", userController.getUser)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

console.log("User working")

module.exports = router