import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
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

    // toggle edit creature form

    toggleEditCreatureForm = (event) => {
        this.setState((state, props) => {
            return({isEditFormDisplayed: !state.isEditFormDisplayed})
        })
    }
    

    // handle change

    handleChange = (event) => {
        const cloneCreature = {...this.state.creature}
        cloneCreature[event.target.name] = event.target.value // ask spence for a better explanation of what's going on here
        this.setState({creature: cloneCreature})
    }

    // update creature

    editCreature = (event) => {
        event.preventDefault()
        axios
            .put(`/api/v1/${this.props.match.params.id}`, {
                name: this.state.creature.name,
                description: this.state.creature.description
            })
            .then(res => {
                this.setState({
                    creature: res.data, 
                    isEditFormDisplayed: false
                })
            })
    }

    deleteCreature = (event) => {
        event.preventDefault()
        axios
            .delete(`/api/v1/${this.props.match.params.id}`).then(res => {
                this.setState({redirectToHome: true})
            })
    }


    render() {
        if (this.state.redirectToHome) {
            return(<Redirect to="/" />)
        }
        return(
            <div>
                <h2>Single Creature</h2>
                <Link to='/'>back to creature page</Link>
                <button onClick={this.toggleEditCreatureForm}>edit creature</button>
                {
                    this.state.isEditFormDisplayed
                    ? <form onSubmit={this.editCreature}>
                        <label>name</label>
                        <input 
                        id="name"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.creature.name}
                        />
                        <label>description</label>
                        <input 
                        id="description"
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.creature.description}
                        />
                        <button>submit update</button>
                    </form>
                    : null
                }

                <h3>name: {this.state.creature.name}</h3>
                <h3>description: {this.state.creature.description}</h3>
                <button onClick={this.deleteCreature}>delete creature</button>
            </div>
        )
    }
}

export default SingleCreature