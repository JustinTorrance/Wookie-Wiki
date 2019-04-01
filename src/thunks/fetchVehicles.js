import { storeVehicles } from '../actions'
import { cleanVehicles } from '../cleaner'

export const fetchVehicles = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const vehicles = await cleanVehicles(data)
      dispatch(storeVehicles(vehicles))
    } catch(error) {
      console.log(error)
    }
  }
}