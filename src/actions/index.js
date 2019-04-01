export const storePeople = (people) => ({
  type: 'STORE_PEOPLE',
  people
})

export const storePlanets = (planets) => ({
  type: 'STORE_PLANETS',
  planets
})

export const storeVehicles = (vehicles) => ({
  type: 'STORE_VEHICLES',
  vehicles
})

export const currentCategory = (category) => ({
  type: 'CURRENT_CATEGORY',
  category
})