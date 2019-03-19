import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleCreature from './SingleCreature';
import axios from 'axios'

class Creatures extends Component {
    state = {
        creatures: [],
        newCreature: {
            name: '',
            description: '',
        },
        displayCreatureForm: false
    }

    componentDidMount = () => {
        axios.get('/api/v1').then(res => {
            this.setState({ creatures: res.data })
        })
    }

    render() {
        console.log()
        return (
            <div>
                <h2>Creatures</h2>
                {
                    this.state.creatures.map(creature => {
                        return (
                            <div key={creature._id}>
                                <Link
                                    to={`/${creature._id}`}
                                >
                                    {creature.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Creatures