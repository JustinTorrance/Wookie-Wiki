import React, { Component } from 'react';
import '../../main.scss';
import ScrollingText from '../ScrollingText/ScrollingText'
import * as API from '../../APIcalls'
import * as cleaner from '../../cleaner'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmText: {},
      people: {}
    }
  }

  componentDidMount = async () => {
    const rawFilmText = await API.fetchText()
    const filmText = await cleaner.cleanFilmText(rawFilmText)
    this.setState({ filmText })
  }

  displayPeople = async () => {
    const people = await API.fetchPeople()
    this.setState({ people })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Wookie Wiki</h1>
        </header>
        <nav>
          <button onClick={() => this.displayPeople()}>People</button>
          <button>Vehicles</button>
          <button>Planets</button>
        </nav>
        <main className='scroll-container'>
          { this.state.filmText !== {} && <ScrollingText {...this.state.filmText} /> }
          {/* { this.state.people !== {} && } */}
        </main>
      </div>
    );
  }
}

export default App;
