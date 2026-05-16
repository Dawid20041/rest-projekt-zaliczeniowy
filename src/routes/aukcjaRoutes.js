const express = require("express")
const router = express.Router()

const aukcjaController = require("../controllers/aukcjaController")

/**
 * @swagger
 * /auctions:
 *   get:
 *     summary: Get all auctions
 *     tags:
 *       - Auctions
 *     responses:
 *       200:
 *         description: List of auctions
 */
router.get("/", aukcjaController.getAllAuctions)

/**
 * @swagger
 * /auctions/{id}:
 *   get:
 *     summary: Get auction by ID
 *     tags:
 *       - Auctions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Auction found
 *       404:
 *         description: Auction not found
 */
router.get("/:id", aukcjaController.getAuction)

/**
 * @swagger
 * /auctions:
 *   post:
 *     summary: Create a new auction
 *     tags:
 *       - Auctions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               startingPrice:
 *                 type: number
 *               currentPrice:
 *                 type: number
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *               ownerId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Auction created successfully
 */
router.post("/", aukcjaController.createAuction)

/**
 * @swagger
 * /auctions/{id}:
 *   put:
 *     summary: Update auction
 *     tags:
 *       - Auctions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               startingPrice:
 *                 type: number
 *               currentPrice:
 *                 type: number
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *               ownerId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Auction updated successfully
 */
router.put("/:id", aukcjaController.updateAuction)

/**
 * @swagger
 * /auctions/{id}:
 *   delete:
 *     summary: Delete auction
 *     tags:
 *       - Auctions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Auction deleted successfully
 */
router.delete("/:id", aukcjaController.deleteAuction)

module.exports = router