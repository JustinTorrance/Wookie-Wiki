import React, { Component } from 'react';
import '../../main.scss';
import ScrollingText from '../ScrollingText/ScrollingText'
import * as API from '../../APIcalls'
import * as cleaner from '../../cleaner'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmTextReady: false,
      filmText: {}
    }
  }

  componentDidMount = async () => {
    const rawFilmText = await API.textFetch()
    const filmText = await cleaner.cleanFilmText(rawFilmText)
    await this.setState({ filmText, filmTextReady: true })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Wookie Wiki</h1>
        </header>
        <main className='scroll-container'>
          { this.state.filmTextReady && <ScrollingText {...this.state.filmText} /> }
        </main>
      </div>
    );
  }
}

export default App;
