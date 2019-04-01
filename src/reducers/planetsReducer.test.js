import { planetsReducer } from './planetsReducer'
import * as actions from '../actions'

describe('planetsReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = planetsReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should should return an array of planets', () => {
    const expected = [{name: 'Hoth'}]
    const action = actions.storePlanets([{name: 'Hoth'}])
    const initialState = []
    const result = planetsReducer(initialState, action)
    expect(result).toEqual(expected)
  })
})

