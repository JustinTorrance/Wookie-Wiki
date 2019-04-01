import * as actions from './index'

describe('actions', () => {

  it('should return a type of STORE_PEOPLE with an array of people', () => {
    const people = [{name: 'luke'}]
    const expected = {
      type: 'STORE_PEOPLE',
      people
    }
    const result = actions.storePeople(people)
    expect(result).toEqual(expected)
  })

  it('should return a type of STORE_PLANETS with an array of planets', () => {
    const planets = [{name: 'Hoth'}]
    const expected = {
      type: 'STORE_PLANETS',
      planets
    }
    const result = actions.storePlanets(planets)
    expect(result).toEqual(expected)
  })

  it('should return a type of STORE_VEHICLES with an array of vehicles', () => {
    const vehicles = [{name: 'ATAT'}]
    const expected = {
      type: 'STORE_VEHICLES',
      vehicles
    }
    const result = actions.storeVehicles(vehicles)
    expect(result).toEqual(expected)
  })

  it('should return a type of CURRENT_CATEGORY with a string of a new category', () => {
    const category = 'people'
    const expected = {
      type: 'CURRENT_CATEGORY',
      category
    }
    const result = actions.currentCategory(category)
    expect(result).toEqual(expected)
  })

})