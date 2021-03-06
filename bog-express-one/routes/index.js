const express = require ('express')
const router = express.Router()
// const creatureController = require ('../models/Creature.js')
const creatureController = require ('../controllers/creatureController.js')

router.get('/', creatureController.index);

/* GET Userlist page. */
// router.get('/', function(req, res) {
//     var db = req.db;
//     var collection = db.get('creatures');
//     collection.find({},{},function(e,docs){
//         res.render('creatures', {
//             "creatures" : docs
//         });
//     });
// });


router.get('/:id', creatureController.show)
router.post('/', creatureController.create)
router.put('/:id', creatureController.update)
router.delete('/:id', creatureController.delete)

module.exports = router