const Creature = require('../models/Creature.js')

const creatureController = {
    index: async (req, res) => {
        try {
            const creatures = await Creature.find({})
            res.json(creatures)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = creatureController