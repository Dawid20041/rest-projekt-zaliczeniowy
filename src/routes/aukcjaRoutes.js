const express = require('express')
const router = express.Router()

const aukcjaController = require('../controllers/aukcjaController')

router.post('/', aukcjaController.createAuction)
router.get('/', aukcjaController.getAllAuctions)
router.get('/:id', aukcjaController.getAuction)
router.put('/:id', aukcjaController.updateAuction)
router.delete('/:id', aukcjaController.deleteAuction)

module.exports = router