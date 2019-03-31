const randomizeEpisode = () => {
    return Math.ceil(Math.random() * 7)
}

export const fetchText = async () => {
    const episode = randomizeEpisode()
    try {
        const response = await fetch(`https://swapi.co/api/films/${episode}/`)
        const film = await response.json()
        return film;
    } catch (error) {
        console.log(error)    
    } 
}


// export const fetchPeople = async () => {
//     try {
//         const response = await fetch('https://swapi.co/api/people')
//         const peopleData = await response.json()
//         const people = await fetchNestedPeopleData(peopleData.results)
//         return Promise.all(people)
//     } catch (error) {
//         console.log(error)
//     }
// }

export const fetchNestedPeopleData = (people) => {
    const peopleData = people.map( async person => {
        const speciesData = await (fetchSpecies(person))
        const homeworldData = await(fetchHomeworld(person))
        return {
            name: person.name,
            species: speciesData.species,
            homeworld: homeworldData.homeworld,
            population: homeworldData.population
        }
    })
    return Promise.all(peopleData)
}

const fetchHomeworld = async (person) => {
    const response = await fetch(person.homeworld)
    const homeworldData = await response.json()
    return {    homeworld: homeworldData.name, 
                population: homeworldData.population }
}

const fetchSpecies = async (person) => {
    const response = await fetch(person.species)
    const species = await response.json()
    return { species: species.name }
    }

export const fetchPlanets = async () => {
    const response = await fetch('https://swapi.co/api/planets')
    const planets = await response.json()
    const planetData = planets.results.map( async planet => {
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

const fetchResidents = (residents) => {
    const residentsArray = residents.map( async resident => {
        const response = await fetch(resident)
        const residentData = await response.json()
        return residentData.name 
    })
    return Promise.all(residentsArray)
} 

export const fetchVehicles = async () => {
    try {
        const response = await fetch('https://swapi.co/api/vehicles')
        const vehicleData = await response.json()
        const vehicles = await vehicleData.results.map(vehicle => {
            return {
                name: vehicle.name,
                model: vehicle.model,
                class: vehicle.vehicle_class,
                capacity: vehicle.passengers
                
            }
        })
        return Promise.all(vehicles)
    } catch (error) {
        console.log(error)
    }
}