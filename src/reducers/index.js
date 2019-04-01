import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';
import { vehiclesReducer } from './vehiclesReducer';
import { planetsReducer } from './planetsReducer';
import { categoryReducer } from './categoryReducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  vehicles: vehiclesReducer,
  planets: planetsReducer,
  category: categoryReducer
})

export default rootReducer;