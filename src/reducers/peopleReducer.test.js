import { peopleReducer } from './peopleReducer'
import * as actions from '../actions'

describe('peopleReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = peopleReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an array of people', () => {
    const expected = [{name: 'luke'}]
    const action = actions.storePeople([{name: 'luke'}])
    const initialState = []
    const result = peopleReducer(initialState, action)
    expect(result).toEqual(expected)
  })
})

