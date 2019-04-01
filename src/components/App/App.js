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
      filmText: {}
    }
  }

  componentDidMount = async () => {
    const rawFilmText = await API.fetchText()
    const filmText = await cleaner.cleanFilmText(rawFilmText)
    this.setState({ filmText })
  }

  displayPeople = (e) => {
    const url = 'https://swapi.co/api/people'
    this.props.fetchPeople(url)
    this.props.category(e.target.name)
  }

  displayVehicles = (e) => {
    const url = 'https://swapi.co/api/vehicles'
    this.props.fetchVehicles(url)
  }

  displayPlanets = (e) => {
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
          <button name='people' onClick={(e) => this.displayPeople(e)}>People</button>
          <button name='planets' onClick={(e) => this.displayPlanets(e)}>Planets</button>
          <button name='vehicles' onClick={(e) => this.displayVehicles(e)}>Vehicles</button>
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
