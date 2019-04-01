import React from 'react'
import { connect } from 'react-redux'
// import Card from '../../components/Card'

const CardContainer = () => {

  // let displayData = 

  return(
    <div>
      HOWDY
    </div>
  )
}

export const mapStateToProps = (state) => ({
  planets: state.planets,
  vehicles: state.vehicles,
  people: state.people
})

export default connect (mapStateToProps)(CardContainer)