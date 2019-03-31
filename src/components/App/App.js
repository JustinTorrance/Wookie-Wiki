import React, { Component } from 'react';
import '../../main.scss';
import ScrollingText from '../ScrollingText/ScrollingText'
import * as API from '../../APIcalls'
import * as cleaner from '../../cleaner'
import { storePeople } from '../../actions'
import { connect } from 'react-redux'

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

  displayPeople = async () => {
    const people = await API.fetchPeople()
    await this.props.storePeople(people)
    // console.log(storedPeople)

    // this.setState({ people })
  }

  displayPlanets = async () => {
    const planets = await API.fetchPlanets()
    this.setState({ planets })
  }

  displayVehicles = async () => {
    const vehicles = await API.fetchVehicles()
    this.setState({ vehicles })
  }

  render() {
    console.log('props', this.props)
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
          {/* { this.state.people !== {} && } */}
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storePeople: (people) => dispatch(storePeople(people))
})

export default connect (null, mapDispatchToProps)(App);
