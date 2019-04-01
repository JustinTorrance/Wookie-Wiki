import React from 'react'
import { connect } from 'react-redux'

const cardContainer = () => {

  return(
    <div>

    </div>
  )
}

export const mapStateToProps = (state) => ({
  planets: state.planets,
  vehicles: state.vehicles,
  people: state.people
})

export default connect (mapStateToProps)(cardContainer)