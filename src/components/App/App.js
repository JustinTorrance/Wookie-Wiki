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
      
      // if(!this.props.category) {
      //   return (<div>
      //    < ScrollingText {...this.state.filmText} />
      //   </div>)
      // } else {
      //   return (
      //     <div>
      //       <CardContainer />

      //   </div> )

      // }
    
     

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
          
          { !this.props.category ? <ScrollingText {...this.state.filmText} /> : <CardContainer /> }
        
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
