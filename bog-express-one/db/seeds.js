require('dotenv').config()

const Creature = require('../models/Creature.js')

const axolotl = new Creature({
    name: "axolotl",
    description: "pink, cute, snuggly"
})

const alligator = new Creature({
    name: "alligator",
    description: "green, scary, not snuggly"
})

const saved = async () => {
    await Creature.deleteMany()
    const animal1 = new Creature(axolotl)
    await animal1.save()
    const animal2 = new Creature(alligator)
    await animal2.save()
}

saved()