import React, { Component } from 'react';
import '../../main.scss';
import ScrollingText from '../ScrollingText/ScrollingText'
import * as API from '../../APIcalls'
import * as cleaner from '../../cleaner'
import { storePeople } from '../../actions'
import { connect } from 'react-redux'
import { fetchPeople } from '../../thunks/fetchPeople'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmText: {},
      people: {},
      planets: {},
      vehicles: {}
    }
  }

  componentDidMount = async () => {
    const rawFilmText = await API.fetchText()
    const filmText = await cleaner.cleanFilmText(rawFilmText)
    this.setState({ filmText })
  }

  displayPeople = () => {
    const url = 'https://swapi.co/api/people'
    this.props.fetchPeople(url)
  }

  displayPlanets = () => {
    const url = 'https://swapi.co/api/planets'
    this.props.fetchPlanets(url)
  }

  // displayVehicles = () => {
  //   const url = 'https://swapi.co/api/vehicles'
  //   this.props.fetchVehicles(url)
   
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Wookie Wiki</h1>
        </header>
        <nav>
          <button onClick={() => this.displayPeople()}>People</button>
          <button onClick={() => this.displayPlanets()}>Planets</button>
          <button onClick={() => this.displayVehicles()}>Vehicles</button>
        </nav>
        <main className='scroll-container'>
          { this.state.filmText !== {} && <ScrollingText {...this.state.filmText} /> }
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPeople: (url) => dispatch(fetchPeople(url)),
  storePeople: (people) => dispatch(storePeople(people))
})

export default connect (null, mapDispatchToProps)(App);
