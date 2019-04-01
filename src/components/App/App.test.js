import { mapStateToProps, mapDispatchToProps } from './App'
import { fetchPeople } from '../../thunks/fetchPeople';
import { fetchPlanets } from '../../thunks/fetchPlanets';
import { fetchVehicles } from '../../thunks/fetchVehicles';
import { currentCategory } from '../../actions'

jest.mock('../../thunks/fetchPeople')
jest.mock('../../thunks/fetchPlanets')
jest.mock('../../thunks/fetchVehicles')

describe('mapStateToProps', () => {
  it('should return an array with people objects', () => {
    const mockCategory = 'people'

    const mockState = {
      category: mockCategory,
    }

    const expected = {
      category: mockCategory,
    }
    
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it('should call dispatch when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = fetchPeople('www.url.com')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchPeople(actionToDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = fetchPlanets('www.url.com')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchPlanets(actionToDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = fetchVehicles('www.url.com')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchVehicles(actionToDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = currentCategory('')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.currentCategory(actionToDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})