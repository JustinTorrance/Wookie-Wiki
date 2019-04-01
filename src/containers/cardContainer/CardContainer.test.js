import { mapStateToProps, mapDispatchToProps } from './CardContainer'


describe('mapStateToProps', () => {
  it('shoud return an array with people objects', () => {
    const mockPeople = [{name: 'luke'}]
    const mockVehicles = [{name: 'ATAT'}]
    const mockPlanets = [{name: 'Hoth'}]
    const mockCategory = ''

    const mockState = {
      people: mockPeople,
      category: mockCategory,
      vehicles: mockVehicles,
      planets: mockPlanets
    }

    const expected = {
      people: mockPeople,
      category: mockCategory,
      vehicles: mockVehicles,
      planets: mockPlanets
    }
    
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})