import { storePlanets } from '../actions'
import { cleanPlanets } from '../cleaner'

export const fetchPlanets = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const planets = await cleanPlanets(data.results)
      dispatch(storePlanets(planets))
    } catch(error) {
      console.log(error)
    }
  }
}