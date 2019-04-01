import { fetchPlanets } from './fetchPlanets'
import { storePlanets } from '../actions'

describe('fetchPlanets', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.someurl.com'
    mockDispatch = jest.fn()
  })

  it('should dispatch storePlanets', async () => {
    const mockPlanets = [{name: 'Luke', residents: ['han', 'solo']}]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        planets: mockPlanets
      })
    }))

    const thunk = fetchPeople(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storePlanets(mockPlanets))

  })




})