const express = require('express')
const router = express.Router()

const aukcjaController = require('../controllers/aukcjaController')
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
 *               ownerId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Auction created successfully
 */
router.post("/", aukcjaController.createAuction)
router.post('/', aukcjaController.createAuction)
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
router.get('/', aukcjaController.getAllAuctions)
router.get('/:id', aukcjaController.getAuction)
router.put('/:id', aukcjaController.updateAuction)
router.delete('/:id', aukcjaController.deleteAuction)

module.exports = router