import React, { Component } from 'react';
import '../../main.scss';
import ScrollingText from '../ScrollingText/ScrollingText'
import * as API from '../../APIcalls'
import * as cleaner from '../../cleaner'
import { connect } from 'react-redux'
import { fetchPeople } from '../../thunks/fetchPeople'
import { fetchPlanets } from '../../thunks/fetchPlanets'
import { fetchVehicles } from '../../thunks/fetchVehicles'


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

  displayVehicles = () => {
    const url = 'https://swapi.co/api/vehicles'
    this.props.fetchVehicles(url)
  }

    displayPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    this.props.fetchPlanets(url)
    }
    
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
  fetchVehicles: (url) => dispatch(fetchVehicles(url)),
  fetchPlanets: (url) => dispatch(fetchPlanets(url))
})

export default connect (null, mapDispatchToProps)(App);
