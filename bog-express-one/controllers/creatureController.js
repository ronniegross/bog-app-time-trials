const express = require('express')
const router = express.Router()
const Creature = require('../models/Creature')



// Get All Creatures

const creatureController = {


    // router.get('/' , (req, res) =>{
    //     Creature.find()
    //     .then(creatures => {
    //         res.render("butts")
    //     })
    //     .catch(err=> console.log(err))
    // })

    index: async (req, res) => {
        try {
            const creatures = await Creature.find({})
            res.json(creatures)
        } catch (err) {
            console.log(err)
        }
    },

    // index: (req, res) => {
    //     Creature.find().then((creatures) => {
    //       res.json(creatures)
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    //   },

    // Get One Creature by Id

    // show: (req, res) => {
    //     const creatureId = req.params.id
    //     console.log(creatureId)
    //     const creature = Creature.findById().then((creatureId) => {
    //     res.json(creatureId)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    show: async (req, res) => {
        try {
            const creatureId = req.params.id
            const creature = await Creature.findById(creatureId)
            res.json(creature)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },

    // Create New Creature

    create: async (req, res) => {
        try {
            const newCreature = req.body
            const savedCreature = await Creature.create(newCreature)
            res.json(savedCreature)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },


    // Update A Creature

    update: async (req, res) => {
        try {
            const creatureId = req.params.id
            const updatedCreature = req.body
            const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature)
            res.json(savedCreature)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    // Delete A Creature

    delete: async (req, res) => {
        try {
            const creatureId = req.params.id
            await Creature.findByIdAndDelete(creatureId)
            res.json({
                msg: 'Successfully Deleted'
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = creatureController