require('dotenv').config()

const Creature = require ('../models/Creature.js')

const critter1 = new Creature ({
    name: "Critter1",
    description: "CritterThings"
})

const critter2 = new Creature ({
    name: "Critter2",
    description: "CritterThings"
})

const saved = async () => {
    await Creature.deleteMany()
    const animal1 = new Creature(critter1)
    await animal1.save()
    const animal2 = new Creature(critter2)
    await animal2.save()
}

saved()



// const animalArray = new Creature ({
//     critter1: {
//         name: "Critter1",
//         description: "CritterThings"
//     },
//     critter2: {
//         name: "Critter2",
//         description: "CritterThings"
//     }
// })

// const saved = async () => {
//     await Creature.deleteMany()
//     const animals = new Creature(animalArray)
//     await animals.save()
// } 

// saved()