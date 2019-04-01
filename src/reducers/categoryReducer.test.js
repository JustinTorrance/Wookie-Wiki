import { categoryReducer } from "./categoryReducer";
import * as actions from '../actions'

describe('categoryReducer', () => {
  it('should return the default state', () => {
    const expected = ''
    const result = categoryReducer(undefined, '')
    expect(result).toEqual(expected)
  })

  it('should return a string of the current category', () => {
    const expected = 'people'
    const action = actions.currentCategory('people')
    const initialState = ''
    const result = categoryReducer(initialState, action)
    expect(result).toEqual(expected)
  })
})