const express = require ('express')
const router = express.Router()
// const creatureController = require ('../models/Creature.js')
const creatureController = require ('../controllers/creatureController.js')

router.get('/', creatureController.index);
router.get('/:id', creatureController.show)
router.post('/new', creatureController.create)
router.put('/:id/update', creatureController.update)
router.delete('/:id/delete', creatureController.delete)


module.exports = router