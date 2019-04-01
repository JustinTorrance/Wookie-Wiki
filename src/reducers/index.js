import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';
import { vehiclesReducer } from './vehiclesReducer';
import { planetsReducer } from './planetsReducer'

const rootReducer = combineReducers({
  people: peopleReducer,
  vehicles: vehiclesReducer,
  planets: planetsReducer
})

export default rootReducer;