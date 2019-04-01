import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'

class CardContainer extends Component {

  render() {

    if (this.props.category) {
      var display = this.props[this.props.category].map(card => {
        return <Card {...card} />
      })
    }

    return(
      <div>
        {display}
      </div>
      )
  }
  
  }
  
  export const mapStateToProps = (state) => ({
    planets: state.planets,
    vehicles: state.vehicles,
    people: state.people,
    category: state.category
  })
  
  export default connect (mapStateToProps)(CardContainer)