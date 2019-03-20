const express = require('express')
const router = express.Router()
const creatureController = require ('../controllers/creatureController')

router.get('/', creatureController.index)

module.exports = router