import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class SingleCreature extends Component {
    state = {
        creature: {
            name: '',
            description: ''
        },
        redirectToHome: false,
        isEditFormDisplayed: false,
    }

    componentDidMount = () => {
        axios.get(`/api/v1/${this.props.match.params.id}`).then(res => {
            this.setState({creature: res.data})
        })
    }

    render() {
        return(
            <div>
                <h2>Single Creature</h2>
                <button>edit creature</button>
                <h3>name: {this.state.creature.name}</h3>
                <h3>description: {this.state.creature.description}</h3>
                <button>delete creature</button>
            </div>
        )
    }
}

export default SingleCreature