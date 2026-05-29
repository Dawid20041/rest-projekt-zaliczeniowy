const express = require("express")
const router = express.Router({ mergeParams: true })

const bidController = require("../controllers/bidController")

/**
 * @swagger
 * /auctions/{id}/bids:
 *   post:
 *     summary: Place a bid on an auction
 *     tags:
 *       - Bids
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Auction ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bidderId:
 *                 type: integer
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Bid placed successfully
 *       400:
 *         description: Invalid input or amount not greater than current price
 *       404:
 *         description: Auction or bidder not found
 */
router.post("/", bidController.createBid)

/**
 * @swagger
 * /auctions/{id}/bids:
 *   get:
 *     summary: Get bid history for an auction
 *     tags:
 *       - Bids
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Auction ID
 *     responses:
 *       200:
 *         description: List of bids ordered newest first
 *       404:
 *         description: Auction not found
 */
router.get("/", bidController.getBidsByAuction)

module.exports = router
