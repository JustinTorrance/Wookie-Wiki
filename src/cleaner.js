import { fetchResidents } from './APIcalls'

export const cleanFilmText = (film) => {
    return {
        title: film.title,
        episode: film.episode_id,
        text: film.opening_crawl
    }
}

export const cleanVehicles = (vehicleData) => {
    const vehicles = vehicleData.results.map(vehicle => {
        return {
            name: vehicle.name,
            model: vehicle.model,
            class: vehicle.vehicle_class,
            capacity: vehicle.passengers
        }
    })
    return Promise.all(vehicles)
}

export const cleanPlanets = (planets) => {
    const planetData = planets.map(async planet => {
        const residents = await fetchResidents(planet.residents)
        return {
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            climate: planet.climate,
            residents: residents
        }
    })
    return Promise.all(planetData)
}
