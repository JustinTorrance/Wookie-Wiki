import { fetchVehicles } from './fetchVehicles'
import { storeVehicles } from '../actions'

describe('fetchVehicles', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.someurl.com'
    mockDispatch = jest.fn()
  })

  it('should dispatch storeVehicles', async () => {
    const mockVehicles = [{name: 'ATAT'}]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        vehicles: mockVehicles
      })
    }))

    const thunk = fetchVehicles(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeVehicles(mockVehicles))

  })




})