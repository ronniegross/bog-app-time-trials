import React, { Component } from 'react';
import NavBar from './Components/NavBar'
import Creatures from './Components/Creatures';
import SingleCreature from './Components/SingleCreature'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar></NavBar>
//         <Creatures></Creatures>
//       </div>
//     );
//   }
// }

class App extends Component {
    render () {
      return (
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Creatures}/>
              <Route path="/:id" component={SingleCreature}/>
            </Switch>
          </div>
        </Router>
      )
    }
  }

export default App;
