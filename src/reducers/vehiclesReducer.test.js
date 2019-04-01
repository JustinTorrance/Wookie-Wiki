import { vehiclesReducer } from './vehiclesReducer'
import * as actions from '../actions'

describe('vehiclesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = vehiclesReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an array of vehicles', () => {
    const expected = [{name: 'ATAT'}]
    const action = actions.storeVehicles([{name: 'ATAT'}])
    const result = vehiclesReducer([], action)
    expect(result).toEqual(expected)
  })
})

