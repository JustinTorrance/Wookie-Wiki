import React, { Component } from 'react';
import '../../main.scss';
import ScrollingText from '../ScrollingText/ScrollingText'
import * as API from '../../APIcalls'
import * as cleaner from '../../cleaner'
import { connect } from 'react-redux'
import { fetchPeople } from '../../thunks/fetchPeople'
import { fetchPlanets } from '../../thunks/fetchPlanets'
import { fetchVehicles } from '../../thunks/fetchVehicles'
import { currentCategory } from '../../actions'
import CardContainer from '../../containers/CardContainer/CardContainer'
import { Link, Route } from 'react-router-dom'

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
    this.props.currentCategory(e.target.name)
    const url = 'https://swapi.co/api/people'
    this.props.fetchPeople(url)
  }

  displayVehicles = (e) => {
    this.props.currentCategory(e.target.name)
    const url = 'https://swapi.co/api/vehicles'
    this.props.fetchVehicles(url)
  }

  displayPlanets = (e) => {
    this.props.currentCategory(e.target.name)
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
          <Link to='/people'><button name='people' onClick={(e) => this.displayPeople(e)}>People</button></Link>
          <Link to='/planets'><button name='planets' onClick={(e) => this.displayPlanets(e)}>Planets</button></Link>
          <Link to='/vehicles'><button name='vehicles' onClick={(e) => this.displayVehicles(e)}>Vehicles</button></Link>
        </nav>
        <main className='scroll-container'> 
          { !this.props.category ? <ScrollingText {...this.state.filmText} /> : <CardContainer /> }
          <Route exact path='/' component={App} />
          <Route exact path='/planets' component={CardContainer} />
          <Route exact path='/vehicles' component={CardContainer} />
          <Route exact path='/people' component={CardContainer} />
        </main>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchPeople: (url) => dispatch(fetchPeople(url)),
  fetchVehicles: (url) => dispatch(fetchVehicles(url)),
  fetchPlanets: (url) => dispatch(fetchPlanets(url)),
  currentCategory: (category) => dispatch(currentCategory(category))
})

export const mapStateToProps = (state) => ({
  category: state.category
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
