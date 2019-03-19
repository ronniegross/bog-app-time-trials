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
        isCreatureFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get('/api/v1').then(res => {
            this.setState({ creatures: res.data })
        })
    }

    toggleCreatureForm = () => {
        this.setState((state, props) => {
            return ({isCreatureFormDisplayed : !state.isCreatureFormDisplayed})
        })
    }

    handleChange = (event) => {
        const cloneNewCreature = {...this.state.newCreature}
        cloneNewCreature[event.target.name] = event.target.value
        this.setState({newCreature: cloneNewCreature})
    }

    createCreature = (event) => {
        event.preventDefault()
        axios
            .post('/api/v1', {
                name: this.state.newCreature.name,
                description: this.state.newCreature.description
            })
            .then(res => {
                const creaturesList = [...this.state.creatures]
                creaturesList.unshift(res.data)
                this.setState({
                    newCreature: {
                        name: '',
                        description: ''
                    },
                    isCreatureFormDisplayed: false,
                    creatures: creaturesList
                })
            })
    }

    render() {
        // console.log(this.state.creatures)
        return (
            <div>
                <h2>Creatures</h2>
                <button onClick={this.toggleCreatureForm}>create a new creature</button>
                {
                    this.state.isCreatureFormDisplayed
                    ? <form onSubmit={this.createCreature}>
                        <label htmlFor="name">name</label>
                        <input 
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newCreature.name}
                        />
                        <label htmlFor="description">description</label>
                        <input 
                            id="description"
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.newCreature.description}
                        />
                        <button>submit</button>
                    </form> 
                    : null
                }
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